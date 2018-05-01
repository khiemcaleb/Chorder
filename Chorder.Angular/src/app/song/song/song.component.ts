import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Part } from '../part/part.component';
import { Song, DisplayMode, EditMode } from '../song';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  @Input() song: Song;
  @Input() isReadOnly: boolean = true;
  @Input() displayMode: DisplayMode = DisplayMode.FULL;

  // This is just for quick navigation
  EditMode: typeof EditMode = EditMode;
  editMode: EditMode = EditMode.VIEW;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      let title = params.get('title');

      if (id > 0){
        this.song = new SongsService().getSongById(id);
      }
      else{
        this.song = new Song();
        this.editLyrics();
      }

    });
  }

  editLyrics($event = null) {
    if ($event) $event.preventDefault();
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