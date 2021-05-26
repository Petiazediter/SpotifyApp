import {Component} from '@angular/core';
import {SpotifyService} from 'src/app/services/spotify.service';
import {Terms} from 'src/app/services/terms';
import {Observable} from 'rxjs';
import {ArtistWrapper} from '../../models/ArtistWrapper';
import {TrackWrapper} from '../../models/TrackWrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  terms = Terms;

  constructor(public service: SpotifyService) {}

  getTracksByTerm(term: Terms): Observable<TrackWrapper>{
    return this.service.getTopTrack(term);
  }

  getArtistByTerm(term: Terms): Observable<ArtistWrapper>{
    return this.service.getTopArtist(term);
  }

  getToken(): string {
    return SpotifyService.token;
  }

  onConnect(): void {
    let href = window.location.href;
    href = href + 'callback/';
    this.service.generateLink('aaeea3eaae8940c1a35e4645a2028096', href);
  }

  onSignOut(): void {
    this.service.onSignOut();
  }

}
