import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

  public valeur: string;
  @ViewChild('inputTextReference', {static: true}) inputReference: ElementRef;

  myInputRef() {
    // console.log(this.inputReference);
    console.log(this.valeur);
    this.valeur = this.inputReference.nativeElement.value;
  }

  clear() {
    this.valeur = "";
    this.inputReference.nativeElement.value = "";
  }

  constructor() {}
  ngOnInit() {
  }

}
