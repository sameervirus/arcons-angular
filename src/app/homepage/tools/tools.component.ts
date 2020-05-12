import { Component, OnInit } from "@angular/core";
import {
  faTools,
  faBuilding,
  faDollarSign,
  faThumbsUp,
  faUserFriends,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-tools",
  templateUrl: "./tools.component.html",
  styleUrls: ["./tools.component.css"]
})
export class ToolsComponent implements OnInit {
  faTools = faTools;
  faBuilding = faBuilding;
  faDollarSign = faDollarSign;
  faThumbsUp = faThumbsUp;
  faUserFriends = faUserFriends;
  faHeadset = faHeadset;
  constructor() {}

  ngOnInit(): void {}
}
