import { Component } from "@angular/core";
import { Post } from "./model/posts";
import { PostService } from "./service/post.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Training";
  counterValue = 0;
  username: string = "";
  userlastname: string = "Singh";
  public posts: Post[];

  constructor(private postService: PostService) {}

  increment() {
    this.counterValue++;
  }

  getPosts() {
    this.posts = this.postService.GetPosts();
  }
}
