import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-blog-form',
  templateUrl: './create-blog-form.component.html',
  styleUrls: ['./create-blog-form.component.css'],
})
export class CreateBlogFormComponent implements OnInit {
  blogForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      destination: ['', Validators.required],
      description: ['', Validators.required],
      blogText: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.blogForm.value);
  }
  onReset(): void {
    this.submitted = false;
  }
}
