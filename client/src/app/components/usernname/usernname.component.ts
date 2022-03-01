import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usernname',
  templateUrl: './usernname.component.html',
  styleUrls: ['./usernname.component.css']
})
export class UsernnameComponent {
  @Output() userNameEvent = new EventEmitter<string>();

  userName = '';

  constructor() { }

  setUserName(): void {
    this.userNameEvent.emit(this.userName);
  }

}
