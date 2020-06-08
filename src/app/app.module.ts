import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxPaginationModule } from "ngx-pagination";
import { ShareModule } from "@ngx-share/core";
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { NgHttpLoaderModule } from "ng-http-loader";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoaderComponent } from "./loader/loader.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToolsComponent } from "./homepage/tools/tools.component";
import { SliderComponent } from "./homepage/slider/slider.component";
import { OffersComponent } from "./homepage/offers/offers.component";
import { AboutComponent } from "./homepage/about/about.component";
import { FeaturedComponent } from "./homepage/featured/featured.component";
import { ClientsComponent } from "./homepage/clients/clients.component";
import { TeamComponent } from "./homepage/team/team.component";
import { NewsletterComponent } from "./homepage/newsletter/newsletter.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutsComponent } from "./pages/abouts/abouts.component";
import { HomeComponent } from "./homepage/home/home.component";
import { ServicesComponent } from "./pages/services/services.component";
import { HeadComponent } from "./pages/head/head.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ProjectComponent } from "./pages/project/project.component";
import { ServiceDetailComponent } from "./pages/services/service-detail/service-detail.component";
import { ContactComponent } from "./blocks/contact/contact.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { DownloadsComponent } from "./blocks/downloads/downloads.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolsComponent,
    OffersComponent,
    SliderComponent,
    AboutComponent,
    FeaturedComponent,
    ClientsComponent,
    TeamComponent,
    NewsletterComponent,
    FooterComponent,
    AboutsComponent,
    HomeComponent,
    ServicesComponent,
    HeadComponent,
    ServiceDetailComponent,
    ProjectsComponent,
    ProjectComponent,
    ContactComponent,
    ContactsComponent,
    DownloadsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoaderComponent],
})
export class AppModule {}
