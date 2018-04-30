import { Component, OnInit, Input } from '@angular/core';
import { Song, DisplayMode, EditMode } from './song';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from './songs.service';
import { Part } from '../part/part.component';

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

  // This is just for quick navigation
  EditMode: typeof EditMode = EditMode;
  editMode: EditMode = EditMode.VIEW;

  editLyrics($event) {
    $event.preventDefault();
    this.isReadOnly = false;
    this.displayMode = DisplayMode.LYRICS;
    this.editMode = EditMode.LYRICS;
  }

  editChord($event) {
    $event.preventDefault();
    this.isReadOnly = false;
    this.displayMode = DisplayMode.FULL;
    this.editMode = EditMode.CHORD;
  }

  view($event) {
    $event.preventDefault();
    this.isReadOnly = true;
    this.displayMode = DisplayMode.FULL;
    this.editMode = EditMode.VIEW;
  }

  addPart() {
    this.song.parts.push({
        lines: [],
        lyrics: '', // TODO: Need null validation
        name: 'Part name'
      });
  }
}