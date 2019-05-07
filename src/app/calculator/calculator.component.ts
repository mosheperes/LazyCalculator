import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ns-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
  moduleId: module.id
})
export class CalculatorComponent implements OnInit {
    editState = true;
    num: number = 0;
    constructor() { }

    ngOnInit() {
  }

}
