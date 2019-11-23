import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  
  // Définition ici du compteur qui sera passé à l'enfant.
  // NON INITILISER ICI.
  public counterStart: number;

  // Résultat permettant d'afficher uniquement le résultat final.
  public resultat;
  
  ngOnInit() {}
  
  updateCounterFinal(event) {
    console.log(event.counterValue);
    this.resultat = event.counterValue
  }
}
