import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})

export class Exercice1EnfantComponent implements OnInit {
  
  // Récupération du compteur définit dans mon parent NON initilisé ICI.
  @Input() private counterInit: number;

  // Conception d'un Setter PRIVE pour modifier le compteur au démarrage de l'application. 
  private setCounterInitFixed(counterNumber: number): void {
    this.counterInit = counterNumber;
  }

  // Conception d'un Getter pour tenter de fixer le compteur au départ. (Initilisé avec ngOnInit)
  public getFixedCounter(counterNumber: number) {
    return this.setCounterInitFixed(counterNumber);
  }

  // Conception d'un getter pour afficher le résultat.
  public getCounterInit(): number {
    return this.counterInit;
  }

  
  @Output() public updateCounter = new EventEmitter();

  public increment() {
    this.counterInit++;
    this.updateCounter.emit({
      counterValue: this.counterInit
    });
  }

  public decrement() {
    this.counterInit--;
    this.updateCounter.emit({
      counterValue: this.counterInit
    });
  }

  constructor() {}
  ngOnInit() {
    this.getFixedCounter(70);
    
  }
}
