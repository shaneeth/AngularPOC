import { GetService } from 'common/services/GetService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService extends GetService {
  constructor(private http: HttpClient) {
    super(http, 'assets/json/places-original.json');
  }
}
