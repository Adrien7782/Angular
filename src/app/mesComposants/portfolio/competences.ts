//On Importe des Types
import { Injectable } from '@angular/core';
import { Competence } from './competence';

@Injectable({
  providedIn: 'root',
})
export class Competences {
  private competences: Competence[] = [{categorie: "technique", valeurs: ["excellent"]},
                                       {categorie: "relationnel", valeurs: ["bon"]},
                                       {categorie: "linguistique", valeurs: ["Bonne"]}
                                      ]; //On instancie un tableau d'objet competence
  // //private competences: Competence[];
  // constructor() {
  //   //this.competences = [];
  // }
  getCompetences(): Competence[]{ //Permet dire le type de retour attendu
    return this.competences;
  }
}
