import { Component, OnInit } from '@angular/core';
import { SongsService } from './songs.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  song;

  constructor(songService: SongsService) {
    this.song = songService.getSongById();
  }

  ngOnInit() {
  }

}