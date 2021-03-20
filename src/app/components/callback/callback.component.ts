import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private httpClient : HttpClient, private route : ActivatedRoute, private spotifyService : SpotifyService) {
    this.route.queryParams.subscribe(params => {
      const code : string = params['code']
      const error: string = params['error']
      spotifyService.OnCallback(code)
    });
  }

  ngOnInit(){}

}
