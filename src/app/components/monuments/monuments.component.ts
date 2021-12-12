import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonumentsService } from 'src/app/services/monuments.service';
import { Monument } from '../../services/monuments.service';

@Component({
  selector: 'app-monuments',
  templateUrl: './monuments.component.html',
  styleUrls: ['./monuments.component.css'],
})
export class MonumentsComponent implements OnInit {

  monuments: Monument[] = [];

  constructor(private _monuments: MonumentsService,
              private router: Router) {}

  ngOnInit(): void {
    this.monuments = this._monuments.getMonuments();
  }

  goToMonument(pI: number){
    this.router.navigate(['/monument', pI]);
  }
}
