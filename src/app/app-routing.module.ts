import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {UserComponent} from "./pages/user/user.component";
import {RegisterComponent} from "./pages/register/register.component";


const routes: Routes = [

  {path: 'login', component: LoginComponent},

  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
