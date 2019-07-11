//This will serve as the protected area that authenticated users will have access to.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from 'src/app/routeur.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  constructor() {}


  ngOnInit() {
  }
}
