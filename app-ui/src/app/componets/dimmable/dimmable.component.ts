import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { Thing } from "app/things/things.component";

@Component({
  selector: "dimmable-cmp",
  templateUrl: "./dimmable.component.html",
  styleUrls: ["./dimmable.component.css"],
})
export class DimmableComponent implements OnInit {
  @Input() thing: Thing[];
  value: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.thing);
  }

  fireControl(controlIndex): void {
    this.http
      .get(
        "http://localhost:80/things/" +
          this.thing["id"] +
          "/controls/" +
          this.thing["controls"][controlIndex]
      )
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  slideChange(event: any) {
    this.http
      .get(
        "http://localhost:80/things/" +
          this.thing["id"] +
          "/controls/" +
          this.thing["controls"][0] +
          "?value=" +
          event.value +
          ""
      )
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
