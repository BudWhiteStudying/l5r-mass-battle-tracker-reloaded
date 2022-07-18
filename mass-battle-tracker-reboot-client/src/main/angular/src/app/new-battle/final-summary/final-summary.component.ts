import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle } from 'src/app/shared/data-model/mass-battle-tracker-server';

@Component({
  selector: 'final-summary',
  templateUrl: './final-summary.component.html',
  styleUrls: ['./final-summary.component.scss']
})
export class FinalSummaryComponent implements OnInit {
  
  pageTitle = "Final summary";

  battleEntity : Battle;

  constructor(private router : Router,private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battleEntity = this.router.getCurrentNavigation().extras.state.battleEntity;
      console.debug("Reached the final screen with battleEntity: " + JSON.stringify(this.battleEntity));
    }
    else {
      this.router.navigateByUrl("/");
    }}

  ngOnInit(): void {
  }

  onFinalSubmit(): void {
    this.httpClient
    .post<Battle>("/mass-battle-tracker/api/battleEntity",this.battleEntity).toPromise()
    .then(
      response => {
        console.info("Finalized battleEntity:\n" + JSON.stringify(response));
        this.router.navigateByUrl("/play-battleEntity/initiative/commander-selection", {
          state: {battleEntity: response}
        });
      }
    );
  }

}
