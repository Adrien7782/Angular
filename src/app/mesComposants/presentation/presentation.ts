import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  templateUrl: './presentation.html',
  styleUrls: ['./presentation.css']
})
export class Presentation {
  prenom = 'Adrien';
  nom = 'Deroye';
  titre = 'Apprenti ingénieur informatique';
  
  accroche = `Étudiant en 4ème année à l’ENSIM, en  alternance en informatique. Je recherche un stage à l’étranger pour l’été 2025. Titulaire du permis B, je suis flexible et autonome. 
              J’aime travailler en équipe.   `;

  parcours = [
    {
      annee: 'Depuis sept 2024',
      intitule: 'Cycle ingénieur – Spécialité Informatique',
      details: 'Intéraction Personne Système (IPS) et Architecture des Systèmes Temps Réels et Embarqués (ASTRE).',
      // mots_cles: 'mini-projets en équipe et en autonomie, systèmes embarqués, réseau, Développement fullstack, Développement procédurale, Développement langage objet.',
      lieu: 'ENSIM, Le Mans'
    },

    {
      annee: '2022 - 2024',
      intitule: "Classe Préparatoire intégrée à l'ENSIM",
      lieu: 'ENSIM, Le Mans',
      details: 'Bases solides en physique, mathématiques, algorithmique, programmation et architecture informatique.'
    },
    {
      annee: '2019 - 2022',
      intitule: 'Baccalauréat Général',
      lieu: 'Lycée Perseigne, Mamers',
      details: 'Spécialités : physique-chimie et mathématiques \nOption: Section Européenne Anglais et Mathématiques Expertes'
    }
  ];

  coordonnees = {
    ville: 'Le Mans, France',
    email: 'adrien.deroye@gmail.com',
    telephone: '06 25 25 41 64',
    linkedin: 'https://www.linkedin.com/in/adrien-deroye/',
    github: 'https://github.com/Adrien7782'
  };
}
