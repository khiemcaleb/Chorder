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

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      let title = params.get('title');

      if (id > 0) {
        this.song = new SongsService().getSongById(id);
      }
      else {
        this.song = {
          title: 'My great song',
          key: 'G',
          parts: [{ name: "Verse", lines: [], lyrics: '' }]
        };
      }
    });
  }

  ngOnInit() {
  }

  editLyrics($event = null) {
    if ($event) $event.preventDefault();
    this.songComponent.view = ViewMode.LYRICS;
  }

  editFull($event) {
    $event.preventDefault();
    this.songComponent.view = ViewMode.FULL;
  }

}
