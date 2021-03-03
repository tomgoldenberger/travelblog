import { Component, OnInit } from '@angular/core';
import { Blogentry } from '../blogentry';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  blogs?: Blogentry[];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.contentService
      .getBlogentrys()
      .subscribe((blogs) => (this.blogs = blogs));
  }
}
