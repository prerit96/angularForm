import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
public loggedIn: boolean;
userDetails: any=[];
defaultUser={email:"admin@gmail.com",password:"Admin@123",firstname:"Prerit",lastname:"Mathur",gender:"Male",mobile:"9873938468"};


  constructor() { 
    this.userDetails.push(this.defaultUser);
  }

  setLoggedIn() {
    this.loggedIn=true;
    console.log("set login: "+this.loggedIn);
    return this.loggedIn;
  }

  getLoggedIn() {
    console.log("get login: "+this.loggedIn);
    return this.loggedIn;
  }

  onLogout() {
    this.loggedIn=false;
    console.log("logout: "+this.loggedIn)
    return this.loggedIn;
  }

  setUser(data) {
    
    this.userDetails.push(data);      
  }

  getUser() {
    return this.userDetails;
  }
}
