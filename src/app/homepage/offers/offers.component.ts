import { Component, OnInit } from "@angular/core";

import { ServiceService } from "../../services/service.service";

import { HelperService } from "../../services/helper.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
})
export class OffersComponent implements OnInit {
  services;
  constructor(
    private serviceService: ServiceService,
    private helper: HelperService
  ) {}

  ngOnInit(): void {
    this.serviceService.getServices().subscribe((res) => {
      this.services = res;
      this.helper.loadJs();
    });
  }
}
