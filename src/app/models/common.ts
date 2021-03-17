export interface Category {
  name: string;
  id: string;
  songs: Song[];
  selected?: boolean;
  isPlaying?: boolean;
}


export interface Song {
  id: string;
  src: string;
  point: number;
  isPlaying?: boolean;
}
