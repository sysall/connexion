//We allow users to join with an email and password.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn } from 'src/app/routeur.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor() {}

  ngOnInit() {
  }

}
