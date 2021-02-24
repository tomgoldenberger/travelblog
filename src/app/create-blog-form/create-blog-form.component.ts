import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blogentry } from '../blogentry';
import { ContentService } from '../content.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-blog-form',
  templateUrl: './create-blog-form.component.html',
  styleUrls: ['./create-blog-form.component.css'],
})
export class CreateBlogFormComponent implements OnInit {
  blogForm: FormGroup;
  submitted = false;
  blog: Blogentry;
  blogs: Blogentry[];
  // selectedFile = null; // For picture upload

  constructor(
    private formBuilder: FormBuilder,
    private contentService: ContentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      destination: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      picture: [''],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.blog = this.blogForm.value;
    if (!this.blog) {
      return;
    }
    this.contentService.addBlogentry(this.blog).subscribe();
    console.log(this.blog);
    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
  /** TODO for picture upload */
  // onFileSelected(event) {
  //   this.blog = this.blogForm.value;
  //   this.blog.picture = event.target.files[0];
  // }
}
