import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MonumentsComponent } from './components/monuments/monuments.component';
import { MonumentComponent } from './components/monument/monument.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'monuments', component: MonumentsComponent},
  {path: 'monument/:id', component: MonumentComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
