import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/CARLOS6775",
    linkedin: "",
    gmail: "carlosgarciacanaviri@gmail.com",
    instagram : "",
    facebook: ""
  };
  constructor() { }

  ngOnInit(): void {
  }

}
