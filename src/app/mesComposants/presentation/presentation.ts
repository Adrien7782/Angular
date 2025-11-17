//On importe des classes et des fonctions nécessaires au composant
import { Component, inject } from '@angular/core';
import { Competences } from './competences';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css',
})
export class Presentation {
  private competencesServices = inject(Competences);
  protected mesCompetences = this.competencesServices.getCompetences();
  protected prenom: string = "Adrien";
  protected nom: string = "DEROYE";
  constructor() {
    console.log(this.competencesServices);
  }
}
