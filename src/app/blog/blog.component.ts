import { Component, OnInit } from '@angular/core';
import { Blogentry } from '../blogentry';
import { ContentService } from '../content.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: Blogentry;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private location: Location
    ) { 
      // this.ngOnInit();
    }

  ngOnInit(): void {
    this.getBlogentry;
  }

  getBlogentry(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentService.getBlogentry(id).subscribe(blog => this.blog = blog);
  }

  goBack(): void {
    this.location.back();
  }
}
