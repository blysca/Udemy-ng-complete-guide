import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('*** snapshot.queryParams = ', this.route.snapshot.queryParams);
    console.log('*** snapshot.fragment = ', this.route.snapshot.fragment);
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          const aEdit = (queryParams['allowEdit'] === '1');
          this.allowEdit = aEdit;
          console.log('*** queryParams[\'allowEdit\'] = ', queryParams['allowEdit']);
          console.log('*** allowEdit = ', this.allowEdit);
        }
      );
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}