import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [

    {
      heading: "Ingeniería en Sistemas",
      duration: "2023 - 2026",
      subtitle:"Universidad Adventista de Bolivia",
      content:"Estudiante activo. Enfocado en desarrollo de software.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
