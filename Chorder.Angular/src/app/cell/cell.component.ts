import { Component, OnInit, Input } from '@angular/core';
import { SongMode } from '../song/song';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell;

  toggle: boolean = false;
  mode: SongMode = SongMode.READ; // this to be inherited


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
