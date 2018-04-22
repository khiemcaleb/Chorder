import { SongMode } from './../song/song';
import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../cell/cell.component';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {

  @Input() line: Line;
  SongMode = SongMode;
}

export class Line {
  cells: Cell[];
}
