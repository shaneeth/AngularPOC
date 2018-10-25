import { Router, ActivatedRoute } from '@angular/router';
import { BikesService } from './bikes.service';
import { Component, OnInit } from '@angular/core';
import { Entity } from 'common/component/Entity';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent extends Entity implements OnInit {

  list: any[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bikesService: BikesService) {
    super(router, activatedRoute, bikesService);
  }

  ngOnInit() {
    this.getList();
  }
}
