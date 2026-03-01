import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],


})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "Carlos Alberto Garcia Canaviri",
    title: "Estudiante de Ingeniería de Sistemas",
    subTitle: "Soy un desarrollador apasionado por conocer nuevas cosas; me gusta saber el porqué de las cosas para poder trabajar mejor con ellas.",
    resumeLink: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
