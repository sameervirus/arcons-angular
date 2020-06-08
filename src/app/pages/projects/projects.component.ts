import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../../services/service.service";
import { HelperService } from "../../services/helper.service";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent implements OnInit {
  projects: any;
  category$: any;
  p: number = 1;
  loading = true;
  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private helper: HelperService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.projects = this.serviceService.getProjects(params.get("category"));
      this.category$ = this.projects.pipe(map((x) => x[0].category));
      window.scrollTo(0, 0);
      this.loading = false;
    });
    this.helper.loadJs();
  }

  onPageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
  }
}
