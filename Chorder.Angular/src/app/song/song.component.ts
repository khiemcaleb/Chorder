import { Component, OnInit, Input } from '@angular/core';
import { Song, DisplayMode } from './song';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from './songs.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      let title = params.get('title');

      this.song = new SongsService().getSongById(id);
    })
  }

  @Input() song: Song;
  @Input() isReadOnly: boolean = true;
  @Input() displayMode: DisplayMode = DisplayMode.FULL;

  editLyrics(){
    this.isReadOnly = false;
    this.displayMode = DisplayMode.LYRICS;
  }

  editChord(){
    this.isReadOnly = false;
    this.displayMode = DisplayMode.FULL;
  }

  viewFull(){
    this.isReadOnly = true;
    this.displayMode = DisplayMode.FULL;
  }
}