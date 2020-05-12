import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
import { NgxPaginationModule } from "ngx-pagination";
import { ShareModule } from "@ngx-share/core";
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoaderComponent } from "./loader/loader.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToolsComponent } from "./homepage/tools/tools.component";
import { SliderComponent } from "./homepage/slider/slider.component";
import { OffersComponent } from "./homepage/offers/offers.component";
import { from } from "rxjs";
import { AboutComponent } from "./homepage/about/about.component";
import { FeaturedComponent } from "./homepage/featured/featured.component";
import { ClientsComponent } from "./homepage/clients/clients.component";
import { TeamComponent } from "./homepage/team/team.component";
import { NewsletterComponent } from "./homepage/newsletter/newsletter.component";
import { LastnewsComponent } from "./homepage/lastnews/lastnews.component";
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoaderComponent,
    ToolsComponent,
    OffersComponent,
    SliderComponent,
    AboutComponent,
    FeaturedComponent,
    ClientsComponent,
    TeamComponent,
    NewsletterComponent,
    LastnewsComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    HttpClientModule,
    NgxPaginationModule,
    ShareModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
