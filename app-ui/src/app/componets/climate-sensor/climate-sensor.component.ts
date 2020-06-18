import { Component, OnInit, Input } from "@angular/core";
import { Thing } from "app/classes";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "climate-sensor-cmp",
  templateUrl: "./climate-sensor.component.html",
  styleUrls: ["./climate-sensor.component.css"],
})
export class ClimateSensorComponent implements OnInit {
  @Input() thing: Thing[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.thing);
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
