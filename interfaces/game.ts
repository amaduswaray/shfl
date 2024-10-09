import { Term, Track } from "./spotify";
export interface GameSettings {
  songPeriod: Term;
  songCoung: number;
  songIndexes: number[];
  title: string;
  sessionId: string;
}

export interface Player {
  name: string;
  image: string;
  tracks?: Track[];
}
