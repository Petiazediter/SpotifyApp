import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(private spotifyService : SpotifyService) {
    spotifyService.GetTracksSubscriber().subscribe(
      (response) => {
          
      },
      (error) => {
        spotifyService.OnSignOut();
      })
  }

  ngOnInit(): void {
  
  }

}
