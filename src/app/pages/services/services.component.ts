import { Component, OnInit } from "@angular/core";

import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  services;
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.services = this.serviceService.getServices();
  }
}
