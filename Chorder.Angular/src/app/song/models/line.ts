import { Cell } from "./cell";

export class Line {
    cells: Cell[];
  
    constructor(textLine: string) {
      this.cells = [];
      var words = textLine.split(' ');
  
      for (let i = 0; i < words.length; i++) {
        this.cells.push(new Cell());
        this.cells.push(new Cell(words[i]));
      }
  
      this.cells.push(new Cell());
    }
  }