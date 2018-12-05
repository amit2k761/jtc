import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../shared/services/post-service.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostServiceService) { }
  posts =[];

  ngOnInit() {
    this.postService.getPosts();
    this.postService.postAddedListener()
      .subscribe(post=> {
        this.posts = <Array<any>> post
      });
  }

  upVotePost(postId){
    this.postService.upVotePost(postId);
  }

  

}
