import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./homepage/home/home.component";
import { AboutsComponent } from "./pages/abouts/abouts.component";
import { ServicesComponent } from "./pages/services/services.component";
import { ServiceDetailComponent } from "./pages/services/service-detail/service-detail.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ProjectComponent } from "./pages/project/project.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutsComponent },
  { path: "services", component: ServicesComponent },
  { path: "services/:service", component: ServiceDetailComponent },
  { path: "projects/:category", component: ProjectsComponent },
  { path: "projects/:category/:project", component: ProjectComponent },
  { path: "contact-us", component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
