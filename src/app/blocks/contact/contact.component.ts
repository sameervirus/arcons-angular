import { Component, OnInit } from "@angular/core";
import {
  faPhone,
  faEnvelope,
  faMapMarked,
} from "@fortawesome/free-solid-svg-icons";

import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarked = faMapMarked;
  data;
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getData().subscribe((res) => (this.data = res));
  }
}
