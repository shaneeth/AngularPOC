import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {

  id: number;
  title: string;
  description: string;
  imageUrl: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.getDetails(this.activatedRoute.snapshot.params.id);
  }

  getDetails(id: number): void {
    this.placesService.getDetails(id).subscribe((data: any) => {
      if (data) {
        this.title = data.title;
        this.description  = data.desc;
        this.imageUrl = data.imageUrl;
      }
    });
  }

  navigateBack(): void {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute
    });
  }

}
