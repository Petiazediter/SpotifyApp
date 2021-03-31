import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allstatscomponent',
  templateUrl: './allstatscomponent.component.html',
  styleUrls: ['./allstatscomponent.component.scss']
})
export class AllstatscomponentComponent implements OnInit {

  constructor(private route : ActivatedRoute) {
    route.params.subscribe((x:any)=>console.log(x))
  }

  ngOnInit(): void {

  }

}
