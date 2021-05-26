import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {TrackWrapper} from '../../models/TrackWrapper';

@Component({
  selector: 'app-top-tracks-display',
  templateUrl: './stat-display.component.html',
  styleUrls: ['./stat-display.component.scss']
})
export class StatDisplayComponent implements OnInit {

  @Input() tracks: Observable<TrackWrapper>;
  @Input() title: string;
  @Input() term: string;
  seeAllLink: string;
  loadedTracks: TrackWrapper|undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.tracks.subscribe(value => this.loadedTracks = value);
    this.seeAllLink = `/stats/tracks/${this.term}`;
  }

  onSeeAllClick(): void {
    this.router.navigate([this.seeAllLink], { skipLocationChange : false});
  }

}
