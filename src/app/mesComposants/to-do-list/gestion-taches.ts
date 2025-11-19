import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class GestionTaches {
  private tasks: Task[] = [
    {
      id: 1,
      done: false,
      libelle: 'Faire de la veille technologique',
      description: 'Regarder et comprendre les differences entre Angular 20 et Angular 21',
    },
    {
      id: 2,
      done: true,
      libelle: 'Mettre en place lenvironnement de developpement',
      description: 'Installer Node.js, Angular CLI et VS Code avec les plugins necessaires.',
    },
    {
      id: 3,
      done: true,
      libelle: 'Creer un composant Angular',
      description: 'Developper un composant <app-header> avec un menu de navigation',
    },
    {
      id: 4,
      done: false,
      libelle: 'Documenter le projet',
      description: 'Ajouter de la TsDoc et completer le README.',
    },
    {
      id: 5,
      done: false,
      libelle: 'Integrer une API REST',
      description: 'Consommer une API pour afficher la liste des utilisateurs',
    },
    {
      id: 6,
      done: true,
      libelle: 'Mettre en place le routing',
      description: 'Configurer les routes principales de lapplication',
    },
    {
      id: 7,
      done: false,
      libelle: 'Ecrire des tests unitaires',
      description: 'Tester lapplication avec Jasmine et Karma',
    },
  ];

  getTaches(): Task[] {
    return this.tasks;
  }
}
