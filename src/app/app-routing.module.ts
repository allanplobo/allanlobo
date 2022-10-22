import { AboutComponent } from "./pages/about/about.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: LandingPageComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "blog",
    loadChildren: () =>
      import("./pages/blog/blog.module").then((m) => m.BlogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
