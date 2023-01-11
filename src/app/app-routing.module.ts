import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListeRecetteComponent } from './liste-recette/liste-recette.component';
import { LoginComponent } from './login-component/login-component.component';
import { RecetteComponent } from './recette/recette.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'recettes', component: ListeRecetteComponent},
  {path: 'recette/:id', component: RecetteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
