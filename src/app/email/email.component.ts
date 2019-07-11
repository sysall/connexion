//This component allows users to login via email and password
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn } from 'src/app/routeur.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;

  constructor() {}

  ngOnInit() {
  }

}
