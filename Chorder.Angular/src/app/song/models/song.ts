import { Part } from "./part";

export class Song {
  id: number;
  key: string;
  title: string;
  parts: Part[];
  artist: string;
  author: string;
  year: number;
  firstPartLyrics: string;
}

export enum SongMode {
  EDIT = "song-editor",
  VIEW = "song-viewer"
}

export enum ViewMode {
  CHORD = "view-chord",
  LYRICS = "view-lyrics",
  FULL = "view-full",
  INFO = "view-info",
  NONE = "view-none"
}
