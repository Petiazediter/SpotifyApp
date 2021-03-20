import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(private spotifyService : SpotifyService) {
    console.log("Const")
    spotifyService.GetTracks(0).then((value : any) => {
        console.log(value)
    })
  }

  ngOnInit(): void {
    console.log("Innit")
  }

}
