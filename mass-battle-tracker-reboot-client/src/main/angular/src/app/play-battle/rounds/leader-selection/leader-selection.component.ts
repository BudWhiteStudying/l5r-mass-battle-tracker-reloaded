import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle, RoundState } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';

@Component({
  selector: 'leader-selection',
  templateUrl: './leader-selection.component.html',
  styleUrls: ['./leader-selection.component.scss']
})
export class LeaderSelectionComponent implements OnInit {

  battle : Battle;
  roundState : RoundState;
  
  pageTitle = `"Rounds" phase: acting Commander picks a Leader`;

  constructor(private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battle = this.router.getCurrentNavigation().extras.state.battle;
      this.roundState = this.router.getCurrentNavigation().extras.state.roundState;
    }
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker-reboot/api/battle", this.battle).toPromise();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.updateBattle()
    .then(
      response => {
        console.info("Remote battle has been updated:\n" + JSON.stringify(response));
        this.battle = response;
        this.router.navigateByUrl('/play-battle/rounds/leader-action', {
          state: {battle: this.battle, roundState : this.roundState}
        });
      }
    );
  }
}
