import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';

@Component({
  selector: 'final-summary',
  templateUrl: './final-summary.component.html',
  styleUrls: ['./final-summary.component.scss']
})
export class FinalSummaryComponent implements OnInit {
  
  pageTitle = "Final summary";

  battle : Battle;

  constructor(private router : Router,private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battle = this.router.getCurrentNavigation().extras.state.battle;
      console.debug("Reached the final screen with battle: " + JSON.stringify(this.battle));
    }
    else {
      this.router.navigateByUrl("/");
    }}

  ngOnInit(): void {
  }

/*   onFinalSubmit(): void {
    this.httpClient
    .post<Battle>("/mass-battle-tracker-reboot/api/battle",this.battle).toPromise()
    .then(
      response => {
        console.info("Finalized battle:\n" + JSON.stringify(response));
        this.router.navigateByUrl("/play-battle/initiative/commander-selection", {
          state: {battle: response}
        });
      }
    );
  } */

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker-reboot/api/battle", this.battle).toPromise();
  }

  onFinalSubmit(): void {
    this.battle.defined = true;
    this.updateBattle()
    .then((response) => {
      this.router.navigateByUrl("/play-battle/initiative/commander-selection", {
        state: {battle: response}
      });
    })
  }

}
