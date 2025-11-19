import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavigationLink = {
  readonly label: string;
  readonly route: string;
  readonly exact?: boolean;
  readonly description: string;
};

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  protected readonly links: NavigationLink[] = [
    {
      label: 'Tâches',
      route: '/to-do-list',
      exact: true,
      description: 'Consulter et gérer la liste de tâches',
    },
    {
      label: 'Présentation',
      route: '/presentation',
      description: 'Découvrir le profil et les compétences',
    },
    {
      label: 'Portfolio',
      route: '/portfolio',
      description: 'Consulter mes projets réalisés',
    },
  ];
}
