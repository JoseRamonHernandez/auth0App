import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'protegida', component: ProtegidaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
