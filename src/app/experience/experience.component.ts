import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
  {
    role: "Pasantía - Desarrollo de Software",
    company: "Universidad Adventista de Bolivia",
    color: "#0d3b66", // Ajuste según identidad visual
    companylogo: "../../../assets/images/uab.png",
    date: "2024 - Presente",
    desc: "Desarrollo backend con C# y frontend con Angular. Implementación de arquitectura limpia y microservicios.",
    descBullets: [
      "Diseño de DTOs y repositorios con Entity Framework",
      "Gestión de versiones con Git en entornos colaborativos"
    ]
  },
  {
    role: "Participante CTF - Ciberseguridad",
    company: "Agetic Bolivia",
    color: "#2a9d8f",
    companylogo: "../../../assets/images/agetic.png",
    date: "2023",
    desc: "Competencias de Capture The Flag enfocadas en seguridad ofensiva y análisis de vulnerabilidades.",
    descBullets: [
      "Resolución de desafíos de criptografía y web exploitation",
      "Trabajo en equipo bajo presión de tiempo"
    ]
  }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
