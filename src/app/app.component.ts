import { Component } from "@angular/core";

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

  increment() {
    this.counterValue++;
  }
}
