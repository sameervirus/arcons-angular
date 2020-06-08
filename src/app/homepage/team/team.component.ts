import { Component, OnInit } from "@angular/core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
})
export class TeamComponent implements OnInit {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faEnvelope = faEnvelope;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  constructor() {}

  ngOnInit(): void {}
}
