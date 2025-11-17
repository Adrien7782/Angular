import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Task } from './task';
import { GestionTaches } from './gestion-taches';

@Component({
  selector: 'app-to-do-list',
  imports: [RouterLink],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
  protected showDone: boolean = false;
  private route = inject(ActivatedRoute);

  private gestionTaches = inject(GestionTaches); //On importe le service pour pouvoir utiliser ses fonctions notamment pour récupérer mes tasks
  protected tasks: Task[] = this.gestionTaches.getTaches();
  
  protected libelles: string[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.showDone = params['done'] === 'true' ? true : false;
    })
  }


}
