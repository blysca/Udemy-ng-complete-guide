import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';

import { ServersService } from '../servers.service';
import {CanComponentDeactivate} from './can-deactivate.guard';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
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
    let id = +this.route.snapshot.params['id'];
    console.log('*** id =  ', id);
    this.server = this.serversService.getServer(id);
    
    this.route.params.subscribe(
      (params: Params) => {
        console.log('*** data =  ', params);
        console.log('*** params[id] =  ', params['id']);
        /*const newId = +params['id'];
        id = newId;*/
  
        /*this.server = this.serversService.getServer(params['id']);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;*/
      }
    );
    // Subscribe route params to update the id if params change
    
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
        return true;
    }
    
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&  !this.changesSaved) {
         return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
