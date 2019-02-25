import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import { SessionService } from 'src/app/Service/session.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  showError=false;    
  constructor(public router: Router, public session: SessionService) { }
  ngOnInit() {
    console.log(this.session.getUser());
  }
  onSubmit() {    
    this.session.getUser().find(data => {
      if (this.user.username == data.email && this.user.password == data.password) {    
        this.session.setLoggedIn();    
        this.router.navigate(['/home']);       
      }
      else {
        this.showError=true;      
      }
  

    });

   
  }

}
