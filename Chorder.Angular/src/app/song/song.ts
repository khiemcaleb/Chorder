import { Part } from "./part/part.component";

export class Song {
  key: string;
  title: string;
  parts: Part[];

  constructor(){
    this.key = 'A#';
    this.title = 'My great new song';
    this.parts = [];

  }
}

// export enum DisplayMode {
//   CHORD = "display-chord",
//   LYRICS = "display-lyrics",
//   FULL = "display-full"
// }

// export enum EditMode {
//   CHORD = "edit-chord",
//   LYRICS = "edit-lyrics",
//   VIEW = "view"
// }

export enum SongMode {
  EDIT = "song-editor",
  VIEW = "song-viewer"
}

export enum ViewMode {
  CHORD = "view-chord",
  LYRICS = "view-lyrics",
  FULL = "view-full"
}
