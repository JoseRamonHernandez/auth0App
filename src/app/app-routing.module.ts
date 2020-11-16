import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { 
    path: 'protegida', 
    component: ProtegidaComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
