import { Part } from "./part";

export class Song {
  key: string;
  title: string;
  parts: Part[];
}

export enum SongMode {
  EDIT = "song-editor",
  VIEW = "song-viewer"
}

export enum ViewMode {
  CHORD = "view-chord",
  LYRICS = "view-lyrics",
  FULL = "view-full"
}
