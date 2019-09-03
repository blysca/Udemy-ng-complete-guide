import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreatinStatus : string = 'No server was created!';
  serverName = 'test server';
  serverCreated: boolean = false;
  servers = ['testserver', 'testserver 2'];
  
  constructor() {
    setTimeout(() => {this.allowNewServer = true},2000)
  }

  ngOnInit() {
  }
  
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatinStatus = 'Server was created! Name is ' + this.serverName;
  }
  
  onUpdateServerName(event: Event) {
    console.log('*** event = ', event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
