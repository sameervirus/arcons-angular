import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  url = "http://localhost/arcons/public/api/";

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url + "data");
  }

  getServices() {
    return this.http.get(this.url + "services");
  }

  getService(bo) {
    return this.http.get(this.url + "services/" + bo);
  }

  getServiceItem(slug) {
    return this.http.get(this.url + "services/" + slug);
  }

  getProjectsCategories() {
    return this.http.get(this.url + "projects-category");
  }

  getProjects(slug) {
    return this.http.get(this.url + "projects/" + slug);
  }

  getProject(category: string, slug: string): any {
    return this.http.get(this.url + "projects/" + category + "/" + slug);
  }

  submitFeedback(feeds) {
    return this.http.post(this.url + "feedback/", { data: feeds });
  }
}
