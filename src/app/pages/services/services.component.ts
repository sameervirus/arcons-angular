import { Component, OnInit } from "@angular/core";

import { ServiceService } from "../../services/service.service";
import { HelperService } from "../../services/helper.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
})
export class ServicesComponent implements OnInit {
  services;
  constructor(
    private serviceService: ServiceService,
    private helper: HelperService
  ) {}

  ngOnInit(): void {
    this.services = this.serviceService.getServices();
    this.helper.loadJs();
  }
}
