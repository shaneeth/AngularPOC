import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {

  list: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes(): void {
    this.http.get('assets/json/bikes-original.json').subscribe((response: any[]) => {
      this.list = response;
    });
  }

}
