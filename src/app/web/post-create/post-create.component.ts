import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostServiceService } from '../../shared/services/post-service.service';
@Component({
    selector: 'post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
    post = "";
    constructor(private postService: PostServiceService) { }

    ngOnInit() {
    }

    createPost() {
        this.postService.createPost(this.post);
        this.post = "";
    }
}
