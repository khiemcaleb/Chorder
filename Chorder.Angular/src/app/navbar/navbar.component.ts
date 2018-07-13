import { Component, OnInit } from '@angular/core';
import {  move, Animationfocus } from '../animations';
import { ElementRef } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Animation } from '@angular/animations/browser/src/dsl/animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    move,
    Animationfocus
  ]
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchBox') inputEl:ElementRef;

  constructor() {}

  ngOnInit() {
  }

  move:string = 'right';
  focus:string = 'unfocus';

  animationMove(  ) {
    this.move = this.move === 'right' ? 'left':'right';
    if (this.move == 'left')
    {
      this.focus = 'focus';
      this.inputEl.nativeElement.focus();
    }
    if (this.move == 'right')
      this.focus = 'unfocus';     
  }
}
