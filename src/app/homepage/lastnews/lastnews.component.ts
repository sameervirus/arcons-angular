import { Component, OnInit } from "@angular/core";
import { faLink } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-lastnews",
  templateUrl: "./lastnews.component.html",
  styleUrls: ["./lastnews.component.css"]
})
export class LastnewsComponent implements OnInit {
  faLink = faLink;
  constructor() {}

  ngOnInit(): void {}
}
