import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SessionService } from 'src/app/Service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  // @Input() childMessage: String;
  // message: string = "Event Emitted"

  // @Output() messageEvent = new EventEmitter<string>();

  // headerVariable: string = "Hello from Header"
  constructor(private router: Router, private session: SessionService) { }

  ngOnInit() {
    // console.log("header ts.. input variable from home comp: " +this.childMessage)
  }

  logout() {
    this.session.onLogout();
    this.router.navigate(['/login']);
  }

  // sendMessage() {
  //   this.messageEvent.emit(this.message)
  // }
}
