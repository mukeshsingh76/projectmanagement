import { Injectable } from "@angular/core";
import { Post } from "../model/posts";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostService {
  public posts: Post[];

  constructor(private http: HttpClient) {}

  GetPosts() {
    this.http
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe(data => {
        this.posts = data;
      });

    return this.posts;
  }
}
