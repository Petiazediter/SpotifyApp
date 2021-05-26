import {Observable} from 'rxjs';
import {Terms} from './terms';

export interface SpotifyServiceInterface {
  getTopTrack(term: Terms): Observable<any>;
}
