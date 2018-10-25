import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DonutsService } from '../donuts.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.scss']
})
export class DonutDetailComponent implements OnInit {

  id: number;
  title: string;
  description: string;
  imageUrl: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private donutService: DonutsService) { }

  ngOnInit() {
    this.getDetails(this.activatedRoute.snapshot.params.id);
  }

  getDetails(id: number): void {
    this.donutService.getDetails(id).subscribe((data: any) => {
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
