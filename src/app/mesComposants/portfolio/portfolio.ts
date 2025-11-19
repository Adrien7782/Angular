//On importe des classes et des fonctions nécessaires au composant
import { Component, inject } from '@angular/core';
import { Competences } from './competences';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  private competencesServices = inject(Competences);
  protected mesCompetences = this.competencesServices.getCompetences();
  protected prenom: string = "Adrien";
  protected nom: string = "DEROYE";
  constructor() {
    console.log(this.competencesServices);
  }
}
