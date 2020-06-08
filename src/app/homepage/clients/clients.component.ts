import { Component, OnInit } from "@angular/core";

import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
})
export class ClientsComponent implements OnInit {
  clients;
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getClients().subscribe((res) => {
      this.clients = this.chunks(res, 3);
    });
  }

  chunks(array, size) {
    let results = [];
    results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }
}
