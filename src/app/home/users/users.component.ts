import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/Service/session.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user: any=[];
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.user = this.session.getUser();
    console.info(this.user);
  }

}
