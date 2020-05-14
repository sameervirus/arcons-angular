import { Component, OnInit } from '@angular/core';

import { ServiceService } from "../../services/service.service";

import { HelperService } from "../../services/helper.service";

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  features: any;

  constructor(private serviceService: ServiceService, private helper: HelperService) { }

  ngOnInit(): void {
    this.serviceService.getFeatured().subscribe(res => {this.features = res; this.helper.loadJs();});
    
  }

}
