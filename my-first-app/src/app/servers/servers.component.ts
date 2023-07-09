import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  allowServerToBeAdded = false;
  serverCreationStatus = 'No Server was created';
  serverName = ''
  userName = ''
  serverCreated = false
  servers = ['Josh', 'Max']


  constructor() {
    setTimeout(() => {
      this.allowServerToBeAdded = true
    }, 5000)
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server is created with name: ' + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  isUserNameEmpty() {
    return this.userName.length <= 0
  }

  resetUserName() {
    this.userName = ''
  }
}
