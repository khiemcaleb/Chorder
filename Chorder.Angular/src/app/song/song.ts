import { Part } from "../part/part.component";

export class Song {
    title: string;
    parts: Part[];
  }
  
  export enum SongMode {
    EDIT = "edit-mode",
    READ = "read-mode"
  }