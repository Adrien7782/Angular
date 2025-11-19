import { Component, input, output } from '@angular/core';
import { Task } from '../to-do-list/task';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.html',
  styleUrl: './tache.css',
})
export class Tache {
  readonly task = input.required<Task>();
  readonly compteur = output<void>();

  protected toggleTask(): void {
    this.compteur.emit();
  }
}
