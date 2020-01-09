import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { DetailBookComponent } from './components/books/detail-book/detail-book.component';
import { HomeLiteratureBookComponent } from './components/home-literature-book/home-literature-book.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {
    path:'sach-van-hoc',
    loadChildren:() => import('./components/home-literature-book/literature-routing.module').then(m => m.LiteratureRoutingModule)
  },
  {
    path:'sach-kinh-te',
    loadChildren:() => import('./components/home-economics-book/economics-routing.module').then(m => m.EconomicsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
