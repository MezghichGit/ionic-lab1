import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: string;
  pwd: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  auth() {
    console.log(this.login+" "+this.pwd);
    //1- recupérer le login + password
    //2- redirection vers la page home
    this.router.navigate(["/home"]);
  }
}
