import { Component, OnInit } from "@angular/core";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { ServiceService } from "../services/service.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  data;
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getData().subscribe((res) => (this.data = res));
  }
}
