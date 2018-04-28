import { Part } from "../part/part.component";

export class Song {
  title: string;
  parts: Part[];
}

export enum DisplayMode {
  CHORD = "display-chord",
  LYRICS = "display-lyrics",
  FULL = "display-full"
}
