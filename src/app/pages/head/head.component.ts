import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
})
export class HeadComponent implements OnInit {
  @Input() title: string;
  project = null;
  name: string;

  constructor() {}

  ngOnInit(): void {}
}
