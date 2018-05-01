import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../songs.service';
import { Song, SongMode, ViewMode } from '../song';

@Component({
  selector: 'app-song-editor',
  templateUrl: './song-editor.component.html',
  styleUrls: ['./song-editor.component.css']
})
export class SongEditorComponent implements OnInit {
  song: Song;
  SongMode: typeof SongMode = SongMode;
  ViewMode: typeof ViewMode = ViewMode;

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

}
