import { Component, OnInit } from "@angular/core";

import { Loginform } from "stackblitz:/src/app/login-form";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  gender = ["Male", "Female"];

  model = new Loginform();
}
