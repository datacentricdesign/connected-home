import { Component, OnInit, Input } from "@angular/core";
import { Thing } from "app/classes";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "motion-sensor-cmp",
  templateUrl: "./motion-sensor.component.html",
  styleUrls: ["./motion-sensor.component.css"],
})
export class MotionSensorComponent implements OnInit {
  @Input() thing: Thing[];
  blink = false;

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
        if (data.result) {
          this.blink = true;
        }
        setTimeout(() => {
          this.blink = false;
        }, 4000);
        console.log(data.result);
      });
  }
}
