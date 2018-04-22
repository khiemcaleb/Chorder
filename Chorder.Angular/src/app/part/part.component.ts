import { Component, OnInit, Input } from '@angular/core';
import { Line } from '../line/line.component';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent {
  @Input() part: Part;
  
}

export class Part {
  name: string;
  lines: Line[];
}
