import { Component, OnInit } from '@angular/core';
import { SessionService } from '../Service/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any = {};  
  constructor(public session: SessionService, private router: Router) {
    this.user.gender='';
   }

  ngOnInit() {    
  }
  signUp() {
    this.session.setUser(this.user);
    this.router.navigate(['/home']);
    console.log(this.session.userDetails)
  }

}
