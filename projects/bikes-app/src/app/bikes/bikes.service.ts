import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetService } from 'common/services/GetService';

@Injectable({
  providedIn: 'root'
})
export class BikesService extends GetService {
  constructor(private http: HttpClient) {
    super(http, 'assets/json/bikes-original.json');
  }
}
