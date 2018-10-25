import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Entity } from 'common/component/Entity';
import { Router, ActivatedRoute } from '@angular/router';
import { DonutsService } from './donuts.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.scss']
})
export class DonutsComponent extends Entity implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private donutsService: DonutsService) {
    super(router, activatedRoute, donutsService);
  }

  ngOnInit() {
    this.getList();
  }
}
