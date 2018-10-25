import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlacesService } from './places.service';
import { Entity } from 'common/component/Entity';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent extends Entity implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private placesService: PlacesService) {
    super(router, activatedRoute, placesService);
  }

  ngOnInit(): void {
    this.getList();
  }
}
