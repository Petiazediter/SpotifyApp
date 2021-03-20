import { Component, OnInit } from '@angular/core';
import { UserTrackResponseObject } from 'src/app/models/UserTrackResponseObject';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  isLoaded : boolean = false;
  tracks : any[] = [];
  currentTrack : any = null;

  constructor(private spotifyService : SpotifyService) {
    console.log("Const")
    this.RecursiveApiGetter(spotifyService.GetTracks(0));
  }

  RecursiveApiGetter(promise : Promise<UserTrackResponseObject>){
    promise.then((value : UserTrackResponseObject) => {
      value.items.forEach(element => {
        this.tracks.push(element)
        if ( this.tracks.length % 200 == 0){
          this.currentTrack = element;
          console.log(this.currentTrack)
        }
      });
      if ( value.next != null){
        // Collecting the next slide
        this.RecursiveApiGetter(this.spotifyService.GetTracksByUrl(value.next))
      } else {
        // All tracks collected
        this.isLoaded = true;
      }
    })
  }

  ngOnInit(){}

}
