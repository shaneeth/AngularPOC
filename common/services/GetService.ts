import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { Observable, of, Observer } from 'rxjs';

export class GetService {
  private list: any[];
  constructor(private _http: HttpClient, private _path?: string) { }

  getList(): Observable<any> {

    if (!isNullOrUndefined(this.list)) {
      return of(this.list);
    }

    const observable: Observable<any> = new Observable<any>((observer: Observer<any>) => {
      this._http.get(this._path).subscribe((response: any[]) => {
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
