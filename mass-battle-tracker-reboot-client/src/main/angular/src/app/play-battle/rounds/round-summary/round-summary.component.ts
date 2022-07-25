import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle, RoundState } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';

@Component({
  selector: 'round-summary',
  templateUrl: './round-summary.component.html',
  styleUrls: ['./round-summary.component.scss']
})
export class RoundSummaryComponent implements OnInit {

  battle : Battle;
  roundState : RoundState;

  constructor(private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battle = this.router.getCurrentNavigation().extras.state.battle;
      this.roundState = this.router.getCurrentNavigation().extras.state.roundState;
    }
  }

  ngOnInit(): void {
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker-reboot/api/battle", this.battle).toPromise();
  }

  onSubmit() : void {
    this.recordArmyTotals();
    this.battle.lastCompletedRound = this.roundState.roundIndex;
    this.updateBattle()
    .then(
      response => {
        console.info("Remote battle has been updated:\n" + JSON.stringify(response));
        this.battle = response;
        console.debug("Upon submission, roundState is\n" + JSON.stringify(this.roundState, null, 4));
        this.router.navigateByUrl('/play-battle/rounds/objective-selection', {
          state: {battle: this.battle, roundState : this.roundState}
        });
      }
    );
  }

  declareWinner(victoriousArmyId : number) {
    this.recordArmyTotals();
    this.battle.lastCompletedRound = this.roundState.roundIndex;
    this.battle.ended = true;
    this.battle.victoriousArmyId = victoriousArmyId;
    console.warn("Ending battle, winner is " + victoriousArmyId);
    this.updateBattle()
    .then(
      response => {
        console.info("Remote battle has been updated:\n" + JSON.stringify(response));
        this.router.navigateByUrl('/', {});
      }
    );
  }

  private recordArmyTotals() : void {
    this.battle.involvedArmies.forEach(army => {
      army.currentCasualties += this.roundState.scorePerArmyId[army.id].totalCasualtiesSuffered;
      army.currentPanic += Math.max(0,this.roundState.scorePerArmyId[army.id].totalPanicSuffered-this.roundState.scorePerArmyId[army.id].totalPanicRemoved);
    });
  }
}
