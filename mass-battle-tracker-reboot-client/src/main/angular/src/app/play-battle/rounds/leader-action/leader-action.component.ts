import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action, ActionType, Battle, Character, Commander, ExecutedAction, RoundState } from 'src/app/shared/data-model/mass-battle-tracker-server';

@Component({
  selector: 'leader-action',
  templateUrl: './leader-action.component.html',
  styleUrls: ['./leader-action.component.scss']
})
export class LeaderActionComponent implements OnInit {

  battle : Battle;
  roundState : RoundState;

  availableActions : Action[] = [
    {
      description : "Assault",
      type : ActionType.ASSAULT,
      canCauseAttrition : true,
      canCausePanic : false
    },
    {
      description : "Challenge",
      type : ActionType.CHALLENGE,
      canCauseAttrition : false,
      canCausePanic : true
    }
  ];
  
  currentAction : ExecutedAction;

  pageTitle = `"Rounds" phase: chosen Leader performs his action`;

  constructor(private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battle = this.router.getCurrentNavigation().extras.state.battle;
      this.roundState = this.router.getCurrentNavigation().extras.state.roundState;
    }
  }

  onSubmit(): void {
    this.recordAction(this.currentAction, this.roundState);
    this.updateBattle()
    .then(
      response => {
        console.info("Remote battle has been updated:\n" + JSON.stringify(response));
        this.battle = response;
        console.debug("Upon submission, roundState is\n" + JSON.stringify(this.roundState, null, 4));
        if(this.switchToNextCommander(this.roundState, this.battle)) {
          this.router.navigateByUrl('/play-battle/rounds/leader-selection', {
            state: {battle: this.battle, roundState : this.roundState}
          });
        }
        else {
          this.router.navigateByUrl('/play-battle/rounds/totals-check', {
            state: {battle: this.battle, roundState : this.roundState}
          });
        }
      }
    );
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker-reboot/api/battle", this.battle).toPromise();
  }

  recordAction(action : ExecutedAction, roundState : RoundState) : void {
    action.perpetrator = roundState.actingLeader;
    action.executionRound = roundState.roundIndex;
    roundState.actionHistory.push(action);
  }

  switchToNextCommander(roundState : RoundState, battle : Battle): Boolean {
    let roundCanGoOn = true;
    let currentCommander = roundState.actingCommander;
    let nextCommander = battle.involvedArmies.map(army => army.commander).find(commander => commander.id!=currentCommander.id);
    let availableLeadersForCurrentCommander = this.findAvailableLeaders(roundState, battle, currentCommander).length;
    let availableLeadersForNextCommander = this.findAvailableLeaders(roundState, battle, nextCommander).length;
    if(availableLeadersForNextCommander>0) {
      roundState.actingCommander = nextCommander;
    }
    else if(availableLeadersForCurrentCommander>0) {
      roundState.actingCommander = currentCommander;
    }
    else {
      roundCanGoOn = false;
    }
    return roundCanGoOn;
  }

  private findAvailableLeaders (roundState : RoundState, battle : Battle, commander : Commander) : Character[]{
    return battle.involvedArmies.find(army => army.commander.id==commander.id)
      .cohorts.map(cohort => cohort.leader)
      .filter(
        leader => !roundState.actionHistory
          .filter(action => action.executionRound===roundState.roundIndex)
          .map(action => action.perpetrator.id)
          .includes(leader.id));
  }

  ngOnInit(): void {
  }

}
