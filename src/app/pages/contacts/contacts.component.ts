import { Component, OnInit } from "@angular/core";

import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { HelperService } from "../../services/helper.service";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
})
export class ContactsComponent implements OnInit {
  faFacebook = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  data;
  submitted = false;
  feeds = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  constructor(
    private helper: HelperService,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.helper.loadJs();
    this.serviceService.getData().subscribe((res) => (this.data = res));
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.feeds);
    this.serviceService.submitFeedback(this.feeds).subscribe((response) => {
      console.log(response);
      //this.res = response;
    });
  }
}
