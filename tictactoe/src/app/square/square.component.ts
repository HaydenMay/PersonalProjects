import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{value}}</button>
  `,
  styles: [
    `button{
      width: 100%;
      height: 100%;
      font-size: 5em;
      color: black;
      opacity: 0.6;
      background-color: lightblue;
      transition: 0.5s;
    }
    button:hover{opacity: 1}
    `
  ]
})
export class SquareComponent{

  @Input() value = "X" || "O"

}
