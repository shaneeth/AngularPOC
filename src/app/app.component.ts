import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('appSideNavMenu') sideNavMenu: MatDrawer;

  ngOnInit() {

  }

  onNavMenuClick() {
    this.sideNavMenu.toggle();
  }

  onNavItemClick() {
    this.sideNavMenu.close();
  }
}
