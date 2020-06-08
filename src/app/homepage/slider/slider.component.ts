import { Component, OnInit } from "@angular/core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { ServiceService } from "../../services/service.service";
import { HelperService } from "../../services/helper.service";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
})
export class SliderComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  slides;
  constructor(
    private serviceService: ServiceService,
    private helper: HelperService
  ) {}

  ngOnInit(): void {
    this.serviceService.getSlides().subscribe((res) => {
      this.slides = res;
      this.helper.loadJs();
    });
  }
}
