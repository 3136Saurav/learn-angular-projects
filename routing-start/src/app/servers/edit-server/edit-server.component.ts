import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanComponentDeactivate, CanDeactivateGuard } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

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

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)
    
    this.route.params.subscribe((queryParams: Params) => {
      console.log(`Query Params: ${queryParams['id']}`)
      this.allowEdit = queryParams['id'] === '1' ? true : false  
    })
    this.route.params.subscribe()
    this.route.fragment.subscribe()
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((queryParams: Params) => {
      console.log(`Query Params: ${queryParams['id']}`)
      this.allowEdit = queryParams['id'] === '1' ? true : false  
    })
    

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route, preserveFragment : true, queryParamsHandling: 'preserve'})    
  }

  canDeactivate():  Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }

    if ((this.server.name !== this.serverName || this.serverStatus != this.server.status) && !this.changesSaved) {
      return confirm("Do you want to discard the changes?")
    } else {
      return true;
    }
  }

}
