import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { UsersComponent } from './home/users/users.component';
import { AuthGuard } from './Guards/auth.guard';
import { DefaultHomeComponent } from './home/default-home/default-home.component';

const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: '', component: DefaultHomeComponent},
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'users', component: UsersComponent }      
    ]},
  { path: 'forgotpwd', component: ForgotPasswordComponent }, 
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
