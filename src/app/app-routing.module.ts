import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Anasayfa
  { path: 'about', component: AboutComponent }, // Hakkımda sayfası
  { path: 'category', component: CategoryComponent }, 
  { path: 'search', component: SearchComponent},
  { path: 'category/:category', component: CategoryComponent }, // Kategoriler
  { path: '**', redirectTo: '' } 
]; 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
