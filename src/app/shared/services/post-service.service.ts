import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostServiceService {
    private post = []
    private newPostAdded = new Subject();

    constructor(private http: HttpClient) { }

    public getPosts() {
        this.http.get<{ message: string, status: Number, data }>('http://localhost:3000/', {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .subscribe(
                Response => {
                    console.log(Response)
                    this.post = Response.data;
                    this.newPostAdded.next([...this.post]);
                },
                (error:Response)=> {
                    console.log('An unexpected error occured')
                })
    }

    postAddedListener() {
        return this.newPostAdded.asObservable();
    }

    public createPost = (post) => {
        let data = {
            post: post
        }
        this.http.post<{ message: string, status: Number, data }>('http://localhost:3000/createPost', data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .subscribe(
                Response => {
                    this.post.push(Response.data);
                    this.newPostAdded.next([...this.post]);
                },
                (error : Response) => {

                    console.log('An unexpected error occured')
                })
    }

    public upVotePost(postId) {
        let data = {
            postId: postId
        }
        this.http.post<{ message: string, status: Number, data }>('http://localhost:3000/upVotePost', data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .subscribe(
                Response => {
                    this.post.find(post => post._id == Response.data._id).likes = Response.data.likes;
                    this.newPostAdded.next([...this.post]);

                },
                error => {
                    console.log('An unexpected error occured')
                })
    }


}
