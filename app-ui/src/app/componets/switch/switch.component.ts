import { Component, OnInit, Input } from "@angular/core";
import { Thing } from "app/things/things.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "switch-cmp",
  templateUrl: "./switch.component.html",
  styleUrls: ["./switch.component.css"],
})
export class SwitchComponent implements OnInit {
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
