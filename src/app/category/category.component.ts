import { Component, OnInit } from '@angular/core';
import { OpeningService } from '../_services/opening.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  data: any;

  constructor(public openingSevice: OpeningService) { }

  ngOnInit() {
    this.openingSevice.getCategories().subscribe(
      data => {
        this.data = data;
        console.table(this.data);
      }
    );
  }

}
