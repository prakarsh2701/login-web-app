import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { authguardGuard } from './Guard/authguard.guard';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'home', component: LandingpageComponent, canActivate:[authguardGuard]},
  //{ path: '**', redirectTo: 'login' },
  { path: 'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
