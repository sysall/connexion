//the LoginComponent will serve as the entry point into our application where users can login or signup.
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn } from 'src/app/routeur.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  constructor() {}

  ngOnInit() {
  }

}
