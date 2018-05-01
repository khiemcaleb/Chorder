import { Component, OnInit, ViewChild } from '@angular/core';
import { Song, SongMode, ViewMode } from '../song';
import { SongComponent } from '../song/song.component';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song-viewer',
  templateUrl: './song-viewer.component.html',
  styleUrls: ['./song-viewer.component.css']
})
export class SongViewerComponent implements OnInit {
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
        this.song = new Song();
      }
    });
  }

  ngOnInit() {
  }

  viewFull($event = null) {
    if ($event) $event.preventDefault();
    this.songComponent.view = ViewMode.FULL;
  }

  viewLyrics($event = null) {
    if ($event) $event.preventDefault();
    this.songComponent.view = ViewMode.LYRICS;
  }

  viewChord($event) {
    $event.preventDefault();
    this.songComponent.view = ViewMode.CHORD;
  }

}
