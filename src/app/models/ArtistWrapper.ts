import {Artist} from './Artist';

export interface ArtistWrapper {
  items: Artist[];
  total: number;
  limit: number;
  offset: number;
  previous: string;
  href: string;
  next: string;
}
