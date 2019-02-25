import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './home/about/about.component';
import { SessionService } from './Service/session.service';
import { ContactComponent } from './home/contact/contact.component';
import { UsersComponent } from './home/users/users.component';
import { DefaultHomeComponent } from './home/default-home/default-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    UsersComponent,
    DefaultHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
