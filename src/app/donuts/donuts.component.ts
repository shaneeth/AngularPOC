import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.scss']
})
export class DonutsComponent implements OnInit {

  list: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDonuts();
  }

  getDonuts(): void {
    this.http.get('assets/json/donuts-original.json').subscribe((response: any[]) => {
      this.list = response;
    });
  }
}
