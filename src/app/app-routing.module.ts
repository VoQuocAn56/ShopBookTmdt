import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { HomeLiteratureBookComponent } from './components/home-literature-book/home-literature-book.component';
import {PathRoutes} from './contracts/PathRoutes';

const routes: Routes = [
  {path:'',redirectTo: PathRoutes.RedirectToHome ,pathMatch:'full'},
  {path: PathRoutes.Home,component:HomeComponent},

  {
    path: PathRoutes.HomeLiterature,
    loadChildren:() => import('./components/home-literature-book/literature-routing.module').then(m => m.LiteratureRoutingModule)
  },
  {
    path: PathRoutes.HomeLiteratureByBookCategory,
    loadChildren:() => import('./components/home-literature-book/literature-routing.module').then(m => m.LiteratureRoutingModule)
  },
  {
    path: PathRoutes.HomeEconomics,
    loadChildren:() => import('./components/home-economics-book/economics-routing.module').then(m => m.EconomicsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
        {scrollPositionRestoration:'enabled', preloadingStrategy:PreloadAllModules},
        )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
