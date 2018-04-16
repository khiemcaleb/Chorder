import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  @Input() cell: Cell;

}

export class Cell {
  chord: string;
  word: string
}
