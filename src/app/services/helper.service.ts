import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  constructor() {}

  number = 0;

  loadJs() {
    if (document.getElementById("custom_js") != null) {
      let attr = document.getElementById("custom_js").getAttribute("loadnm");
      let num = attr.replace("time", "");
      this.number = parseInt(num);
      this.number += 1;
      document.getElementById("custom_js").remove();
    }

    if (document.getElementById("slick_js") != null) {
      document.getElementById("slick_js").remove();
    }

    const node = document.createElement("script");
    node.src = "assets/js/script.js";
    node.setAttribute("loadnm", "time" + this.number);
    node.type = "text/javascript";
    node.async = false;
    node.id = "custom_js";
    node.charset = "utf-8";
    document.getElementsByTagName("body")[0].appendChild(node);
  }
}
