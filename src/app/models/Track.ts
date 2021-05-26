import {AlbumArtist} from './AlbumArtist';
import {Album} from './Album';

export class Track{
  album: Album;
  artists: AlbumArtist[];
  explicit: boolean;
  href: string;
  id: string;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
