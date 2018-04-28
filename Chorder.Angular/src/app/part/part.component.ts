import { Component, OnInit, Input } from '@angular/core';
import { Line } from '../line/line.component';
import { DisplayMode } from '../song/song';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent {
  @Input() part: Part;
  @Input() displayMode: DisplayMode;
  @Input() isReadOnly: boolean;  

  DisplayMode: typeof DisplayMode = DisplayMode;
}

export class Part {
  name: string;
  lines: Line[];
  lyrics: string;
}

export enum PartMode {

}
