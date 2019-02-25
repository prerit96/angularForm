import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SessionService } from '../Service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{
  // message = "parent_variable";
  user: any = [];

  @ViewChild(HeaderComponent) child;
  constructor(private router: Router,private session: SessionService) { }

  ngOnInit() {    
  }

  ngAfterViewInit() { 
    // console.log("home ts... view child variable from header comp: " + this.child.headerVariable)
  }

  // eventMessage: string;
  // receiveMessage($event) {
  //   this.eventMessage = $event
  //   console.log(this.eventMessage)
  // }


}
