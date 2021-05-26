import {Track} from './Track';

export interface TrackWrapper {
  items: Track[];
  total: number;
  offset: number;
  href: string;
  previous: string|null;
  next: string|null;
}
