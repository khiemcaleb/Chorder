import { Component, OnInit } from '@angular/core';
import {  move, Animationfocus } from '../animations';
import { ElementRef } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Animation } from '@angular/animations/browser/src/dsl/animation';
import { platform } from 'process';

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

  constructor() {
  }

  screenMobi: boolean;

  ngOnInit() {
    this.screenMobi = !(window.screen.width < 599);
  }
 
}
