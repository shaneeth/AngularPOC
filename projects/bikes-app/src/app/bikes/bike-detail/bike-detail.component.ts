import { ActivatedRoute, Router } from '@angular/router';
import { BikesService } from './../bikes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.scss']
})
export class BikeDetailComponent implements OnInit {

  id: number;
  title: string;
  description: string;
  imageUrl: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bikesService: BikesService) { }

  ngOnInit() {
    this.getDetails(this.activatedRoute.snapshot.params.id);
  }

  getDetails(id: number): void {
    this.bikesService.getDetails(id).subscribe((data: any) => {
      if (data) {
        this.title = data.title;
        this.description  = data.desc;
        this.imageUrl = data.imageUrl;
      }
    });
  }

  navigateBack(): void {
    this.router.navigate(['../']);
  }
}
