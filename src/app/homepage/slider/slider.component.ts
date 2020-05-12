import { Component, OnInit } from "@angular/core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  constructor() {}

  ngOnInit(): void {}
}
