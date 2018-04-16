import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../cell/cell.component';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() line: Line;
  

}

export class Line {
  cells: Cell[];
}
