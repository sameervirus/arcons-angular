import { Component, OnInit } from "@angular/core";

import { ServiceService } from "../../../services/service.service";
import { HelperService } from "../../../services/helper.service";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-service-detail",
  templateUrl: "./service-detail.component.html",
})
export class ServiceDetailComponent implements OnInit {
  services: any;
  item: any;
  serviceItem;
  loading = true;
  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private helper: HelperService
  ) {}

  ngOnInit(): void {
    this.services = this.serviceService.getServices();
    this.route.paramMap.subscribe((params) => {
      this.serviceService.getService(params.get("service")).subscribe((res) => {
        this.item = res;
        this.loading = false;
      });
    });
    this.helper.loadJs();
    window.scrollTo(0, 0);
  }
}
