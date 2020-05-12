import { Component, OnInit } from "@angular/core";

import { HelperService } from "../../services/helper.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private helper: HelperService) {}

  ngOnInit(): void {
    this.helper.loadJs();
  }
}
