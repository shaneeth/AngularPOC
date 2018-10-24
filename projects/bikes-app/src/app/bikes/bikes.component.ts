import { Router, ActivatedRoute } from '@angular/router';
import { BikesService } from './bikes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {

  list: any[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bikesService: BikesService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes(): void {
    this.bikesService.getList().subscribe((data: any[]) => {
      this.list = data;
    });
  }

  navigateToDetails(id: number): void {
    this.router.navigate([`./${id}`], {
      relativeTo: this.activatedRoute
    });
  }
}
