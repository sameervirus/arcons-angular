import { Component, OnInit } from "@angular/core";
import { HelperService } from "src/app/services/helper.service";

@Component({
  selector: "app-abouts",
  templateUrl: "./abouts.component.html",
})
export class AboutsComponent implements OnInit {
  constructor(private helper: HelperService) {}

  ngOnInit(): void {
    this.helper.loadJs();
  }
}
