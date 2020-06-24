import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { Thing } from "app/classes";

@Component({
  selector: "dimmer-cmp",
  templateUrl: "./dimmer.component.html",
  styleUrls: ["./dimmer.component.css"],
})
export class DimmerComponent implements OnInit {
  @Input() thing: Thing[];
  value: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.thing);
  }

  formatLabel(value: number) {
    return value;
  }

  slideChange(event: any, controlIndex) {
    this.http
      .get(
        "http://localhost:80/things/" +
          this.thing["id"] +
          "/controls/" +
          this.thing["controls"][controlIndex] +
          "?value=" +
          event.value +
          ""
      )
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
