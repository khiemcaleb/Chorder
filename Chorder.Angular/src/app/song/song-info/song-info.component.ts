import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song, SongMode } from '../models/song';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.css']
})
export class SongInfoComponent implements OnInit {

  @Input() song: Song;
  @Input() mode: SongMode;

  @Output() change = new EventEmitter();

  SongMode: typeof SongMode = SongMode;
  
  constructor() { 
  }

  ngOnInit() {
  }

  onChange($event){
    this.change.emit($event);
  }

}
