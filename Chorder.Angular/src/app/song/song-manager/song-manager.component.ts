import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song-manager',
  templateUrl: './song-manager.component.html',
  styleUrls: ['./song-manager.component.css']
})
export class SongManagerComponent implements OnInit {
  songs: Song[];

  constructor(private songsService: SongsService) { }

  ngOnInit() {
    this.songsService.getSongs()
      .subscribe(response => {
        this.songs = response.json();
      });
  }
}
