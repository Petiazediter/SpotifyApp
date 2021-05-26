import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyService} from 'src/app/services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService, private router: Router) {
    this.route.queryParams.subscribe(() => {
      const hashString = window.location.hash.substring(1);
      const result = hashString.split('&');
      const resultObject = [];
      for (const param of result) {
        // Param looks like : 'paramName=xy' now
        const paramSplit = param.split('=');
        // Split to 'paramName', 'xy'
        resultObject.push({key: paramSplit[0], value: paramSplit[1]});
      }
      if (resultObject[0].key === 'access_token') {
        spotifyService.setToken(resultObject[0].value);
      } else {
        spotifyService.onSignOut();
        return;
      }
      this.router.navigate(['/'], {skipLocationChange: false});
    });
  }

  ngOnInit(): void {}

}
