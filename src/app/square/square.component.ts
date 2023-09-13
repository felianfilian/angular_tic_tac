import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  rando: number = 0;

  constructor() {
    setInterval(() => (this.rando = Math.random()), 500);
  }
}
