import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/models/Track';
import { TrackContainer } from 'src/app/models/TrackContainer';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Terms } from 'src/app/services/terms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loaded : number = 0;
  private hadToLoad : number = 6;
  isLoaded : boolean = false;
  shortTermTopTracks!: any;
  medTermTopTracks!: any;
  longTermTopTracks!: any;
  shortTermTopArtists!: any;
  medTermTopArtists!:any;
  longTermTopArtists!:any;  

  constructor(public service : SpotifyService,private location : Location) { 
    this.loaded = 0;
    if ( SpotifyService.token != null){
      this.processObserver(service.GetTopTrack(Terms.MED_TERM).toPromise(),this.SetMedTermTopTracks)
      this.processObserver(service.GetTopTrack(Terms.LONG_TERM).toPromise(),this.SetLongTermTopTracks)
      this.processObserver(service.GetTopTrack(Terms.SHORT_TERM).toPromise(),this.SetShortTermTopTracks)
      this.processObserver(service.GetTopArtist(Terms.MED_TERM).toPromise(),this.SetMedTermTopArtists)
      this.processObserver(service.GetTopArtist(Terms.LONG_TERM).toPromise(),this.SetLongTermTopArtists)
      this.processObserver(service.GetTopArtist(Terms.SHORT_TERM).toPromise(),this.SetShortTermTopArtists)
    }
  }

  SetMedTermTopTracks(y : HomeComponent,x : any){
    y.medTermTopTracks = x;
  }

  SetMedTermTopArtists(y : HomeComponent, x : any){
    y.medTermTopArtists = x;
  }

  SetLongTermTopTracks(y : HomeComponent,x : any){
    y.longTermTopTracks = x;
  }

  SetLongTermTopArtists(y : HomeComponent, x : any){
    y.longTermTopArtists = x;
  }

  SetShortTermTopArtists(y : HomeComponent, x : any){
    y.shortTermTopArtists = x;
  }

  SetShortTermTopTracks(y : HomeComponent,x : any){
    y.shortTermTopTracks = x;
  }

  processObserver(promise : Promise<any>, fn : (y:HomeComponent,x : any)=> void){
    promise.then((value : any) => {
      fn(this,value)
    })
    .finally(() =>{
      this.loaded ++;
      this.isLoaded = this.loaded == this.hadToLoad;
    })
  }

  getToken() : string{
    return SpotifyService.token;
  }

  onConnect(): void{
    let href = window.location.href;
    href = href + "callback/"
    this.service.generateLink("aaeea3eaae8940c1a35e4645a2028096",href);
  }

  onSignOut() : void{
    this.service.OnSignOut();
  }

}
