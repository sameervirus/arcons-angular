import { Component, OnInit } from "@angular/core";

import { faDownload } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-downloads",
  templateUrl: "./downloads.component.html",
  styleUrls: ["./downloads.component.css"],
})
export class DownloadsComponent implements OnInit {
  faDownload = faDownload;

  constructor() {}

  ngOnInit(): void {}
}
