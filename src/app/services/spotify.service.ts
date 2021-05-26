import {Location} from '@angular/common';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SpotifyServiceInterface} from './spotify_service_interface';
import {Terms} from './terms';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ArtistWrapper} from '../models/ArtistWrapper';
import {TrackWrapper} from '../models/TrackWrapper';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements SpotifyServiceInterface {

  constructor(private location: Location, private httpClient: HttpClient) {
    if (this.isExpired()) {
      SpotifyService.token = null;
    } else {
      SpotifyService.token = localStorage.getItem('token');
    }
  }
  public static token: string | null = null;

  private static getHeaderOptions(): { headers: HttpHeaders } {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + SpotifyService.token,
    };
    return {headers: new HttpHeaders(headerDict)};
  }

  isExpired(): boolean {
    if (localStorage.getItem('added') != null) {
      const t1 = new Date();
      const t2 = Date.parse(localStorage.getItem('added'));
      const dif = t1.getTime() - t2;
      const secondsFromT1ToT2 = dif / 1000;
      const secondsBetweenDates = Math.abs(secondsFromT1ToT2);
      return secondsBetweenDates >= 3600;
    }
    return true;
  }

  generateLink(clientId: string, redirectUri: string): void {
    const scopes = 'user-read-private user-read-email user-library-read user-top-read';
    window.location.href = `https://accounts.spotify.com/authorize` +
      `?response_type=token` +
      `&client_id=${clientId}` +
      `&scope=${encodeURIComponent(scopes)}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}`;
  }

  setToken(token: string): void {
    SpotifyService.token = token;
    localStorage.setItem('token', token);
    const date = new Date();
    localStorage.setItem('added', date.toString());
  }

  onSignOut(): void {
    SpotifyService.token = null;
    localStorage.removeItem('token');
    this.location.replaceState('/');
  }

  getTracks(offset: number): Observable<TrackWrapper> {
    const requestOptions = SpotifyService.getHeaderOptions();
    return this.httpClient.get<TrackWrapper>(`https://api.spotify.com/v1/me/tracks?offset=${offset}`, requestOptions);
  }

  getTracksByUrl(url: string): Observable<TrackWrapper> {
    const requestOptions = SpotifyService.getHeaderOptions();
    return this.httpClient.get<TrackWrapper>(url, requestOptions);
  }

  getTopTrack(term: Terms): Observable<TrackWrapper> {
    return this.httpClient.get<TrackWrapper>(
      `https://api.spotify.com/v1/me/top/tracks?time_range=${term.valueOf()}&limit=5`, SpotifyService.getHeaderOptions());
  }

  getTopTracksByUrl(url: string): Observable<TrackWrapper> {
    return this.httpClient.get<TrackWrapper>(url, SpotifyService.getHeaderOptions());
  }

  getTopArtist(term: Terms): Observable<ArtistWrapper> {
    return this.httpClient.get<ArtistWrapper>(`https://api.spotify.com/v1/me/top/artists?time_range=${term.valueOf()}&limit=5`,
      SpotifyService.getHeaderOptions());
  }

}
