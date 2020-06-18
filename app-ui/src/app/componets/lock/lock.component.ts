import { Component, OnInit, Input } from "@angular/core";
import { Thing } from "app/classes";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "lock-cmp",
  templateUrl: "./lock.component.html",
  styleUrls: ["./lock.component.css"],
})
export class LockComponent implements OnInit {
  @Input() thing: Thing[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

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
