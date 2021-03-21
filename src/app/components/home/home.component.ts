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
  private hadToLoad : number = 3;
  isLoaded : boolean = false;
  shortTermTopTracks!: TrackContainer;
  medTermTopTracks!: TrackContainer;
  longTermTopTracks!: TrackContainer;


  constructor(public service : SpotifyService,private location : Location) { 
    this.loaded = 0;
    if ( SpotifyService.token != null){
      this.processObserver(service.GetTop20Tracks(Terms.MED_TERM).toPromise(),this.SetMedTermTopTracks)
      this.processObserver(service.GetTop20Tracks(Terms.LONG_TERM).toPromise(),this.SetLongTermTopTracks)
      this.processObserver(service.GetTop20Tracks(Terms.SHORT_TERM).toPromise(),this.SetShortTermTopTracks)
    }
  }

  SetMedTermTopTracks(y : HomeComponent,x : TrackContainer){
    y.medTermTopTracks = x;
  }

  SetLongTermTopTracks(y : HomeComponent,x : TrackContainer){
    y.longTermTopTracks = x;
  }

  SetShortTermTopTracks(y : HomeComponent,x : TrackContainer){
    y.shortTermTopTracks = x;
  }

  processObserver(promise : Promise<any>, fn : (y:HomeComponent,x : TrackContainer)=> void){
    promise.then((value : TrackContainer) => {
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
    this.service.generateLink("aaeea3eaae8940c1a35e4645a2028096","http://localhost:4200/callback/");
  }

  onSignOut() : void{
    this.service.OnSignOut();
  }

}
