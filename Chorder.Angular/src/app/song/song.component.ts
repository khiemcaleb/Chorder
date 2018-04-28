import { Component, OnInit, Input } from '@angular/core';
import { Song, DisplayMode } from './song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  constructor() {

  }

  @Input() song: Song;
  @Input() isReadOnly: boolean;
  @Input() displayMode: DisplayMode;
}