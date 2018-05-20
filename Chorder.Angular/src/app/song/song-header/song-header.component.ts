import { Component, OnInit, Input } from '@angular/core';
import { Song, SongMode, ViewMode } from '../models/song';

@Component({
  selector: 'app-song-header',
  templateUrl: './song-header.component.html',
  styleUrls: ['./song-header.component.css']
})
export class SongHeaderComponent implements OnInit {

  @Input() song: Song;
  @Input() mode: SongMode;
  @Input() view: ViewMode;

  SongMode: typeof SongMode = SongMode;
  ViewMode: typeof ViewMode = ViewMode;

  isEditing: boolean = false;
  isFocus: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onHeaderClick($event) {
    if (!this.isEditing)
      this.isEditing = true;
  }

  onBlur($event) {
    if (this.isEditing)
      this.isEditing = false;
    $event.preventDefault();
  }

  // onKeyBlur($event) {
  //   if (this.isEditingKey)
  //     this.isEditingKey = false;
  //   $event.preventDefault();
  // }

  // onTitleBlur($event) {
  //   if (this.isEditingTitle)
  //     this.isEditingTitle = false;
  //   $event.preventDefault();
  // }

}
