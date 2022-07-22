import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Battle, RoundState } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';

@Component({
  selector: 'objective-selection',
  templateUrl: './objective-selection.component.html',
  styleUrls: ['./objective-selection.component.scss']
})
export class ObjectiveSelectionComponent implements OnInit {

  battle : Battle;
  roundState : RoundState;

  pageTitle = `"Rounds" phase: set strategic objectives for the Round`;

  constructor(private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battle = this.router.getCurrentNavigation().extras.state.battle;
      if(this.router.getCurrentNavigation().extras.state.roundState) {
        this.roundState = this.router.getCurrentNavigation().extras.state.roundState;
      }
      else {
        this.roundState = {
          roundIndex : 0,
          currentObjectivePerArmyId : {},
          scorePerArmyId : {},
          actionHistory : []
        };
      }
    }
    else {
      this.router.navigateByUrl("/");
    }
  }

  onSubmit(): void {
    this.updateBattle()
    .then(
      response => {
        console.info("Remote battle has been updated:\n" + JSON.stringify(response));
        this.battle = response;
        console.debug("Upon submission, roundState is\n" + JSON.stringify(this.roundState, null, 4));
        this.router.navigateByUrl('/play-battle/rounds/first-move', {
          state: {battle: this.battle, roundState : this.roundState}
        });
      }
    );
  }

  private initializeStrategicObjectives() : void {
    this.battle.involvedArmies.forEach(
      army => {
        this.roundState.currentObjectivePerArmyId[army.id] = {
          name : "",
          reached : false
        };
      }
    );
  }

  private initializeRoundScores() : void {
    this.battle.involvedArmies.forEach(
      army => {
        this.roundState.scorePerArmyId[army.id] = {
          totalAttritionSuffered : 0,
          totalPanicSuffered : 0,
          totalPanicRemoved : 0
        };
      }
    );
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker-reboot/api/battle", this.battle).toPromise();
  }

  ngOnInit(): void {
    this.roundState.roundIndex++;
    this.pageTitle = `Rounds phase (round {this.roundState.roundIndex}): set strategic objectives`;
    this.initializeStrategicObjectives();
    this.initializeRoundScores();
  }

}
