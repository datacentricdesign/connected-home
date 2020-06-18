import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { Thing } from "app/classes";

@Component({
  selector: "colored-light-cmp",
  templateUrl: "./colored-light.component.html",
  styleUrls: ["./colored-light.component.css"],
})
export class ColoredLightComponent implements OnInit {
  @Input() thing: Thing[];
  colorValue: string;
  red: number = 0;
  green: number = 0;
  blue: number = 0;
  rgbColor: [0, 0, 0];
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

  colorRed(event: any, controlIndex) {
    this.red = event.value;
    this.sendColor(controlIndex);
    console.log(
      "Red: " + this.red + ", Green: " + this.green + ", Blue: " + this.blue
    );
  }

  colorGreen(event: any, controlIndex) {
    this.green = event.value;
    this.sendColor(controlIndex);
    console.log(
      "Red: " + this.red + ", Green: " + this.green + ", Blue: " + this.blue
    );
  }
  colorBlue(event: any, controlIndex) {
    this.blue = event.value;
    this.sendColor(controlIndex);
    console.log(
      "Red: " + this.red + ", Green: " + this.green + ", Blue: " + this.blue
    );
  }

  sendColor(controlIndex) {
    this.http
      .get(
        "http://localhost:80/things/" +
          this.thing["id"] +
          "/controls/" +
          this.thing["controls"][controlIndex] +
          "?value[]=" +
          this.red +
          "&value[]=" +
          this.green +
          "&value[]=" +
          this.blue
      )
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
