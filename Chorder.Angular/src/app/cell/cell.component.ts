import { Component, OnInit, Input } from '@angular/core';
import { SongMode } from '../song/song';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input('cell') cell: Cell;
  @Input('mode') mode: SongMode;

  toggle: boolean = false;


  constructor() { 
  }

  ngOnInit() {
  }

  switchMode(){
    if (this.mode == SongMode.EDIT)
      this.toggle = !this.toggle;
  }
}

export class Cell {
  chord: string;
  word: string
}
