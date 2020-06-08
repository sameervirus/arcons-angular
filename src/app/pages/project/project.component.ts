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
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  encapsulation: ViewEncapsulation.None,
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
  loading = true;
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
          (this.project = res),
            this.meta.addTag({ property: "og:url", content: this.url });
          this.meta.addTag({ property: "og:title", content: res.name });
          this.meta.addTag({ property: "og:type", content: "project" });
          this.meta.addTag({
            property: "og:description",
            content: res.description,
          });
          this.meta.addTag({ property: "og:image", content: res.img[0] });
          this.loading = false;
          this.loadscript();
        });
      window.scrollTo(0, 0);
    });
  }

  loadscript() {
    if (document.getElementById("slick_js") != null) {
      document.getElementById("slick_js").remove();
    }
    const node = document.createElement("script");
    node.src = "assets/js/slick.js";
    node.type = "text/javascript";
    node.async = false;
    node.id = "slick_js";
    node.charset = "utf-8";
    document.getElementsByTagName("body")[0].appendChild(node);

    if (document.getElementById("slick_js") != null) {
      document.getElementById("slick_js").remove();
    }
  }
}
