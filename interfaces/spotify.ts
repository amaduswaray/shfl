import { on } from "events";

export interface Artist {
  name: string;
}

type AlbumType = "album" | "single" | "compilation";

export type Term = "short_term" | "medium_term" | "long_term";

export interface Album {
  album_type: AlbumType;
  total_tracks: number;
  id: string;
  images: SpotifyImage[];
  name: string;
}

export interface SpotifyImage {
  url: string;
  height: string;
  width: string;
}

export interface Track {
  artists: Artist[];
  name: string;
  uri: string;
  album: Album;
}
