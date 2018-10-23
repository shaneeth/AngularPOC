import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  list: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces(): void {
    this.http.get('assets/json/places-original.json').subscribe((response: any[]) => {
      this.list = response;
    });
  }

}
