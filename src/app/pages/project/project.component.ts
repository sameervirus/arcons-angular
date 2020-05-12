import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../../services/service.service";
import { HelperService } from "../../services/helper.service";
import { ActivatedRoute } from "@angular/router";
import { Meta } from "@angular/platform-browser";

import { ShareService } from "@ngx-share/core";

import {
  faUser,
  faCalendar,
  faMapMarked,
  faMoneyBill,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
  faPinterestP,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  project;
  url;
  icons$ = {
    client: faUser,
    dates: faCalendar,
    loc: faMapMarked,
    value: faMoneyBill,
    fb: faFacebookF,
    twitter: faTwitter,
    linkin: faLinkedinIn,
    faWhatsapp: faWhatsapp,
    faPinterestP: faPinterestP,
    faFacebookMessenger: faFacebookMessenger,
    faArrowLeft: faArrowLeft,
    faArrowRight: faArrowRight,
  };
  constructor(
    private serviceService: ServiceService,
    private helper: HelperService,
    private route: ActivatedRoute,
    public share: ShareService,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      this.url =
        "https://www.arconsegypt.com/" +
        url[0].path +
        "/" +
        url[1].path +
        "/" +
        url[2].path;
    });
    this.route.paramMap.subscribe((params) => {
      this.serviceService
        .getProject(params.get("category"), params.get("project"))
        .subscribe((res) => {
          (this.project = res), this.helper.loadJs();
          this.meta.addTag({ property: "og:url", content: this.url });
          this.meta.addTag({ property: "og:title", content: res.name });
          this.meta.addTag({ property: "og:type", content: "project" });
          this.meta.addTag({
            property: "og:description",
            content: res.description,
          });
          this.meta.addTag({ property: "og:image", content: res.img[0] });
        });
      window.scrollTo(0, 0);
    });
  }
}
