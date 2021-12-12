import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonumentsService } from '../../services/monuments.service';

@Component({
  selector: 'app-monument',
  templateUrl: './monument.component.html',
  styleUrls: ['./monument.component.css']
})
export class MonumentComponent implements OnInit {

  monument: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _monumentsService: MonumentsService) { 
    this.activatedRoute.params.subscribe(params =>{
      this.monument = this._monumentsService.getMonument(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
