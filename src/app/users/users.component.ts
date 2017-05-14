import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from '../users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  errorMsg : string;
  public usersList : string[];
  mode ='observable';

  constructor(public userService: UsersService) {
    
  }

  ngOnInit() { this.getusers(); }

  getusers() {
    this.userService.getUsers()
          .subscribe(
            users => this.usersList = users,
            error => this.errorMsg = <any>error
          );
  }

}
