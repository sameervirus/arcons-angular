import { Component, OnInit } from "@angular/core";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { ServiceService } from "../services/service.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  faFacebook = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  categories;
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.categories = this.serviceService.getProjectsCategories();
  }

  closeMenu() {
    const el = document.querySelector(".rd-navbar-submenu");
    if (el.classList.contains("focus")) {
      el.classList.remove("focus");
    }
  }
}
