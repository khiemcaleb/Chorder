import { Component, OnInit, Input, QueryList, ViewChildren } from '@angular/core';
import { Song, DisplayMode, EditMode } from './song';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from './songs.service';
import { Part, PartComponent } from '../part/part.component';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  @Input() song: Song;
  @Input() isReadOnly: boolean = true;
  @Input() displayMode: DisplayMode = DisplayMode.FULL;

  @ViewChildren(PartComponent) partComponents: QueryList<PartComponent>;

  // This is just for quick navigation
  EditMode: typeof EditMode = EditMode;
  editMode: EditMode = EditMode.VIEW;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      let title = params.get('title');

      if (id > 0) {
        this.song = new SongsService().getSongById(id);
      }
      else {
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
  onPartTab(partComponent: PartComponent) {
    if (partComponent.index < this.partComponents.length - 1) {
      var nextPartComponent = this.partComponents.toArray()[partComponent.index + 1];
      var firstCell = nextPartComponent.lineComponents.first.cellComponents.first;
      firstCell.isFocus = false;
      firstCell.isEditing = true;
    }
    
  }
  addPart() {
    this.song.parts.push({
      lines: [],
      lyrics: '', // TODO: Need null validation
      name: 'Part name'
    });

  }
}