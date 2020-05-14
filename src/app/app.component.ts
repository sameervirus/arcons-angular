import { Component } from "@angular/core";
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ARCONS";
  loadDone = false;
  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
          this.loadDone = true
      }
   });
   }
}
