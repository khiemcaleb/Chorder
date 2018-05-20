import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../songs.service';
import { SongComponent } from '../song/song.component';
import { Song, SongMode, ViewMode } from '../models/song';

@Component({
  selector: 'app-song-editor',
  templateUrl: './song-editor.component.html',
  styleUrls: ['./song-editor.component.css']
})
export class SongEditorComponent implements OnInit {
  song: Song;
  SongMode: typeof SongMode = SongMode;
  ViewMode: typeof ViewMode = ViewMode;

  @ViewChild(SongComponent) songComponent: SongComponent;

  constructor(private route: ActivatedRoute, private songsService: SongsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      let title = params.get('title');

      if (id > 0) {
        this.songsService.getSongById(id)
          .subscribe(response => {
            this.song = response.json();
          });
      }
      else {
        this.song = {
          id: 0,
          title: "Your song title",
          key: "C#",
          parts: [{
            lines: [],
            lyrics: "",
            name: "Verse"
          }],
          artist: "",
          author: "",
          year: 2018
        }
      }
    });
  }

  onSongChange($event) {
    if (this.song.id == 0) {
      this.songsService.createSong(this.song)
        .subscribe(response => {
          this.song.id = response.json().id;
        });
    }
    else {
      this.songsService.updateSong(this.song)
        .subscribe(response => {
          console.log(response);
        });
    }
    $event.stopPropagation();
  }

  onStepSelect($event) {
    console.log($event);
    switch ($event.selectedIndex) {
      case 0:
        this.songComponent.view = ViewMode.LYRICS;
        break;

      case 1:
        this.songComponent.view = ViewMode.FULL;
        break;

      case 2:
        this.songComponent.view = ViewMode.INFO;
        break;

      default:
        break;
    }
  }

}
