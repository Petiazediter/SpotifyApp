import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists-display',
  templateUrl: './artists-display.component.html',
  styleUrls: ['./artists-display.component.scss']
})
export class ArtistsDisplayComponent implements OnInit {

  @Input() artists : any;
  @Input() title : string;
  @Input() term : string;

  seeAllLink : string;

  constructor(private router : Router) { 
    
  }

  ngOnInit(): void {
    this.seeAllLink = '/stats/artists/' + this.term
  }

  onSeeAllClick() : void {
    this.router.navigate([this.seeAllLink],{skipLocationChange : false})
  }

}
