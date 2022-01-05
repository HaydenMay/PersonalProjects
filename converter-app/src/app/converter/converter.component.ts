import { LowerCasePipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  welcomeMessage : string = "Feel Free to Mess around with this text"
  textToAlter : string = ''
  capitalize = new CapitalizePipe
  constructor() { }

  ngOnInit(): void {
  }

  onCapitalize(value: string){
    this.welcomeMessage = this.capitalize.transform(value)
    return this.welcomeMessage
  }
  onLittleCase(value: string){
    this.welcomeMessage = value.toLowerCase() 
  }


}
