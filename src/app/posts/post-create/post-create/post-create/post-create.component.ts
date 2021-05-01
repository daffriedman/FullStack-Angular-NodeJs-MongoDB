import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/posts/posts.service';
import { Post } from '../../../../post-model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
 
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postService.addPosts(form.value.title, form.value.content);
  form.resetForm();
  }
  constructor(public postService: PostsService) {}

  ngOnInit(): void {}
}
