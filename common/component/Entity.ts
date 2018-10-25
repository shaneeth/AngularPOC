import { Router, ActivatedRoute } from '@angular/router';
import { BikesService } from 'projects/bikes-app/src/app/bikes/bikes.service';
import { DonutsService } from 'src/app/donuts/donuts.service';

export class Entity {
  list: any[];

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _service: any) {}
  getList(): void {
    this._service.getList().subscribe((data: any[]) => {
      this.list = data;
    });
  }

  navigateToDetails(id: number): void {
    this._router.navigate([`./${id}`], {
      relativeTo: this._activatedRoute
    });
  }
}
