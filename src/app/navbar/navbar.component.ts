import { Component, OnInit } from "@angular/core";
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { ServiceService } from "../services/service.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit {
  faFacebook = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faWhatsapp = faWhatsapp;
  categories;
  data;
  features;
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.categories = this.serviceService.getProjectsCategories();
    this.serviceService.getData().subscribe((res) => (this.data = res));
    this.serviceService.getFeatured().subscribe((res) => (this.features = res));
  }

  closeMenu() {
    const el = document.querySelector(".rd-navbar-submenu");
    if (el.classList.contains("focus")) {
      el.classList.remove("focus");
    }
  }
}
