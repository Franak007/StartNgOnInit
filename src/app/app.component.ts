import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Exo2';
  polite: string = "Vous n'êtes pas poli !";
  num1: number = 7;
  num2: number = 4;
  addition: number = this.num1 + this.num2;

  ngOnInit(): void {
    alert("Bonjour !");
    console.log(this.polite);
    console.log(this.addition);
    }

}
