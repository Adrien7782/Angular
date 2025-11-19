import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from './task';
import { GestionTaches } from './gestion-taches';
import { Tache } from '../tache/tache';

@Component({
  selector: 'app-to-do-list',
  imports: [Tache],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
  protected filter: FilterOption = 'todo';
  protected tasks: Task[] = [];

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly gestionTaches = inject(GestionTaches);
  private readonly allTasks = this.gestionTaches.getTaches();

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.filter = this.resolveFilter(params['filter'], params['done']);
      this.applyFilter();
    });
  }

  protected onFilterChange(option: string): void {
    const normalized = this.normalizeFilter(option);
    if (normalized === this.filter) {
      return;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { filter: normalized, done: null },
      queryParamsHandling: 'merge',
    });
  }

  protected toggle(id: number): void {
    const task = this.allTasks.find((t) => t.id === id);
    if (!task) {
      return;
    }

    task.done = !task.done;
    this.applyFilter();
  }

  private applyFilter(): void {
    if (this.filter === 'all') {
      this.tasks = [...this.allTasks];
      return;
    }

    this.tasks =
      this.filter === 'done'
        ? this.allTasks.filter((t) => t.done)
        : this.allTasks.filter((t) => !t.done);
  }

  private resolveFilter(filterParam: unknown, legacyDone: unknown): FilterOption {
    if (typeof filterParam === 'string') {
      return this.normalizeFilter(filterParam);
    }

    if (typeof legacyDone === 'string') {
      return legacyDone === 'true' ? 'all' : 'todo';
    }

    return 'todo';
  }

  private normalizeFilter(value: string | null | undefined): FilterOption {
    switch (value) {
      case 'all':
      case 'done':
        return value;
      default:
        return 'todo';
    }
  }
}

type FilterOption = 'all' | 'done' | 'todo';
