import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hideshowpass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon= "fa-eye": this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type="password";

  }

  gotohome(){
    this.router.navigate([`/home`]);
  }

}
