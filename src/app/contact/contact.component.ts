import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Contáctame ☎️",
    subtitle: "¿Tienes un proyecto o solo quieres saludar? Mi buzón está abierto para todos.",
    number: "67759889",
    email_address: "carlosgarciacanaviri@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
