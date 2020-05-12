import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../../services/service.service";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  projects: any;
  category$: any;
  p: number = 1;
  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.projects = this.serviceService.getProjects(params.get("category"));
      this.category$ = this.projects.pipe(map((x) => x[0].category));
      window.scrollTo(0, 0);
    });
  }

  onPageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
  }
}
