import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
skillsSection = {
  title: "Lo que hago",
  subTitle: "DESARROLLADOR FULL STACK EN FORMACIÓN CON ENFOQUE EN ARQUITECTURA LIMPIA",
  skills: [
    "⚡ Desarrollo frontend con Angular, Signals y formularios reactivos",
    "⚡ Backend con C#, Entity Framework y diseño de APIs REST",
    "⚡ Implementación de Clean Architecture, DTOs y patrón Repositorio",
    "⚡ Control de versiones con Git y flujos de trabajo colaborativos",
    "⚡ Estilos responsivos con Tailwind CSS, Grid y Flexbox",
    "⚡ Nociones de ciberseguridad práctica mediante competencias CTF"
  ]
};
  constructor() { }

  ngOnInit(): void {
  }

}
