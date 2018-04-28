import { Component } from '@angular/core';
import { SongsService } from './song/songs.service';
import { DisplayMode } from './song/song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  song;
  DisplayMode: typeof DisplayMode = DisplayMode;

  constructor(songService: SongsService) {
    this.song = songService.getSongById();
  }
}
