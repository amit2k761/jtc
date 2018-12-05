import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { API_URL } from '../../constants/constants';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class PostServiceService {
    private post = [];
    private newPostAdded = new Subject();

    constructor(private http: HttpClient, private toaster: ToastrService) { }

    public getPosts() {
        this.http.get<{ message: string, status: Number, data }>(API_URL + '/')
            .subscribe(
                Response => {
                    this.post = Response.data;
                    this.newPostAdded.next([...this.post]);
                },
                (error: Response) => {
                    console.log('An unexpected error occured')
                })
    }

    public createPost = (post) => {
        if (!post) {
            this.toaster.error('Post cant be empty')
        } else {
            let data = {
                post: post
            }
            this.http.post<{ message: string, status: Number, data }>(API_URL + '/createPost', data)
                .subscribe(
                    Response => {
                        this.post.push(Response.data);
                        this.newPostAdded.next([...this.post]);
                        this.toaster.success('Post added succesfully')
                    },
                    (error: Response) => {
                        console.log('An unexpected error occured')
                    })
        }
    }

    public upVotePost(postId) {
        let data = {
            postId: postId
        }
        this.http.post<{ message: string, status: Number, data }>(API_URL + '/upVotePost', data)
            .subscribe(
                Response => {
                    this.post.find(post => post._id == Response.data._id).likes = Response.data.likes;
                    this.newPostAdded.next([...this.post]);
                },
                (error:Response) => {
                    console.log('An unexpected error occured')
                })
    }

    postAddedListener() {
        return this.newPostAdded.asObservable();
    }

}
