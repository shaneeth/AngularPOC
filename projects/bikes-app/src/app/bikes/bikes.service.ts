import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  private list: any[];
  constructor(private http: HttpClient) { }

  getList(): Observable<any> {

    if (!isNullOrUndefined(this.list)) {
      return of(this.list);
    }

    const observable: Observable<any> = new Observable<any>((observer: Observer<any>) => {
      this.http.get('assets/json/bikes-original.json').subscribe((response: any[]) => {
        this.list = response;
        observer.next(this.list);
        observer.complete();
      });
    });

    return observable;
  }

  getDetails(id: number): Observable<any> {
    const observable: Observable<any> = new Observable<any>((observer: Observer<any>) => {
      this.getList().subscribe((data: any[]) => {
        observer.next(data.filter((entity) => entity.id === +id)[0]);
        observer.complete();
      });
    });

    return observable;
  }
}
