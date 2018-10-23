import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  @ViewChild('appSideNavMenu') sideNavMenu: MatDrawer;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router
            .events
            .pipe(
              filter(e => e instanceof NavigationEnd),
              map(() => this.activatedRoute),
              map(route => {
                  if (route.firstChild) {
                      route = route.firstChild;
                  }

                  return route;
              }),
              filter(route => route.outlet === 'primary'),
              mergeMap(route => route.data)
            )
            .subscribe(data => {
              this.title = data.title;
            });
  }

  onNavMenuClick() {
    this.sideNavMenu.toggle();
  }

  onNavItemClick() {
    this.sideNavMenu.close();
  }
}
