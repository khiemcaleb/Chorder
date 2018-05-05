import { Component, OnInit, Input } from '@angular/core';
import { Song, SongMode } from '../models/song';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.css']
})
export class SongInfoComponent implements OnInit {

  @Input() song: Song;
  @Input() mode: SongMode;
  SongMode: typeof SongMode = SongMode;
  
  constructor() { 
  }

  ngOnInit() {
  }

}
