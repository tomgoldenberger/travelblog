import { Component, OnInit } from '@angular/core';
import { Blogentry } from '../blogentry';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  blogs?: Blogentry[];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.contentService.getBlogentrys()
    .subscribe(blogs => this.blogs = blogs);
  }

  // TODO add new Blogpost!
  
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.contentService.addBlogentry({ title } as Blogentry)
  //     .subscribe(blogentry => {
  //       this.blogs.push(blogentry);
  //     });
  // }

  // TODO delete a Blogpost!

  // delete(blogentry: Blogentry): void {
  //   this.blogs = this.blogs.filter(h => h !== blogentry);
  //   this.contentService.deleteBlogentry(blogentry).subscribe();
  // }

}
