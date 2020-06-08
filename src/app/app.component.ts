import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { LoaderComponent } from "./loader/loader.component";
import { HelperService } from "./services/helper.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "ARCONS";
  loadDone = false;
  public loaderComponent = LoaderComponent;
  constructor(private router: Router, private helper: HelperService) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.loadDone = true;
        this.helper.loadJs();
      }
    });
  }
}
