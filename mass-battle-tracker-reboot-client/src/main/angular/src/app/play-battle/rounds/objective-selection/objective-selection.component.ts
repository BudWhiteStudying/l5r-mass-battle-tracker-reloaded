import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Battle, RoundState } from 'src/app/shared/data-model/mass-battle-tracker-server';

@Component({
  selector: 'objective-selection',
  templateUrl: './objective-selection.component.html',
  styleUrls: ['./objective-selection.component.scss']
})
export class ObjectiveSelectionComponent implements OnInit {

  battleEntity : Battle;
  roundState : RoundState;

  pageTitle = `"Rounds" phase: set strategic objectives for the Round`;

  constructor(private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battleEntity = this.router.getCurrentNavigation().extras.state.battleEntity;
      if(this.router.getCurrentNavigation().extras.state.roundState) {
        this.roundState = this.router.getCurrentNavigation().extras.state.roundState;
      }
      else {
        this.roundState = {
          roundIndex : 0,
          currentObjectivePerArmyName : {},
          scorePerArmyName : {},
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
        console.info("Remote battleEntity has been updated:\n" + JSON.stringify(response));
        this.battleEntity = response;
        console.debug("Upon submission, roundState is\n" + JSON.stringify(this.roundState, null, 4));
        this.router.navigateByUrl('/play-battleEntity/rounds/first-move', {
          state: {battleEntity: this.battleEntity, roundState : this.roundState}
        });
      }
    );
  }

  private initializeStrategicObjectives() : void {
    this.battleEntity.involvedArmies.forEach(
      army => {
        this.roundState.currentObjectivePerArmyName[army.name] = {
          name : "",
          reached : false
        };
      }
    );
  }

  private initializeRoundScores() : void {
    this.battleEntity.involvedArmies.forEach(
      army => {
        this.roundState.scorePerArmyName[army.name] = {
          totalAttritionSuffered : 0,
          totalPanicSuffered : 0,
          totalPanicRemoved : 0
        };
      }
    );
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker/api/battleEntity", this.battleEntity).toPromise();
  }

  ngOnInit(): void {
    this.roundState.roundIndex++;
    this.pageTitle = `Rounds phase (round {this.roundState.roundIndex}): set strategic objectives`;
    this.initializeStrategicObjectives();
    this.initializeRoundScores();
  }

}
