import { HttpClient } from '@angular/common/http';
import { GetService } from 'common/services/GetService';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonutsService extends GetService {

  constructor(private http: HttpClient) {
    super(http, 'assets/json/donuts-original.json');
  }
}
