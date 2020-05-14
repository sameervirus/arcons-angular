import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
 loadDone = false;
  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
          this.loadDone = true
      }
   });
   }

  ngOnInit(): void {
  }

}
