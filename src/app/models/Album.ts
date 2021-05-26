import {AlbumArtist} from './AlbumArtist';
import {Image} from './Image';

export interface Album {
  artists: AlbumArtist[];
  href: string;
  images: Image[];
  id: string;
  name: string;
  type: string;
  uri: string;
}
