import { Component, OnInit } from '@angular/core';
import { Blogentry } from '../blogentry';
import { ContentService } from '../content.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  public blog: Blogentry;
  public uid: string;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.uid = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getBlogentry();
  }

  getBlogentry(): void {
    this.contentService
      .getBlogentry(this.uid)
      .subscribe((blog) => (this.blog = blog));
  }

  goBack(): void {
    this.location.back();
  }
}
