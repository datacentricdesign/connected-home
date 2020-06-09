import { Component, OnInit, Input } from "@angular/core";
import { Thing } from "../../things/things.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "light-cmp",
  templateUrl: "./light.component.html",
  styleUrls: ["./light.component.css"],
})
export class LightComponent implements OnInit {
  @Input() thing: Thing[];

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
}
