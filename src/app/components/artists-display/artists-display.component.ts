import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ArtistWrapper} from '../../models/ArtistWrapper';
import {Observable} from 'rxjs';
import {Artist} from '../../models/Artist';

@Component({
  selector: 'app-artists-display',
  templateUrl: './artists-display.component.html',
  styleUrls: ['./artists-display.component.scss']
})
export class ArtistsDisplayComponent implements OnInit {

  @Input() artists: Observable<ArtistWrapper>;
  @Input() title: string;
  @Input() term: string;

  loadedArtists: undefined|ArtistWrapper;

  seeAllLink: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.artists.subscribe(value => this.loadedArtists = value);
    this.seeAllLink = `/stats/artists/${this.term}`;
  }

  onSeeAllClick(): void {
    this.router.navigate([this.seeAllLink], { skipLocationChange : false});
  }

}
