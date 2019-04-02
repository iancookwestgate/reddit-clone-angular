import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[PostService]
})
export class MainComponent implements OnInit {
  constructor(private router: Router, private postService: PostService ){}

  posts: Post[];

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }


  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  };


}
