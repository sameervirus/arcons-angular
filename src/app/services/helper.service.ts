import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  constructor() {}

  loadJs() {
    if (document.getElementById("custom_js") != null) {
      document.getElementById("custom_js").remove();
    }
    const node = document.createElement("script");
    node.src = "assets/js/script.js";
    node.type = "text/javascript";
    node.async = false;
    node.id = "custom_js";
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
}
