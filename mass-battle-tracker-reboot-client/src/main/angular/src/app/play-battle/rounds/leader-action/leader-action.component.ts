import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle, ExecutedAction, RoundState } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';
import { StandingLeadersOfCommanderPipe } from 'src/app/shared/util/standing-leaders-of-commander.pipe';

@Component({
  selector: 'leader-action',
  templateUrl: './leader-action.component.html',
  styleUrls: ['./leader-action.component.scss']
})
export class LeaderActionComponent implements OnInit {

  battle : Battle;
  roundState : RoundState;
  
  currentAction : ExecutedAction;

  pageTitle = `"Rounds" phase: chosen Leader performs their action`;

  constructor(private router:Router,
    private httpClient: HttpClient,
    private standingLeadersOfCommanderPipe: StandingLeadersOfCommanderPipe) {
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
    action.perpetratorId = roundState.actingLeader.id;
    action.executionRound = roundState.roundIndex;
    roundState.actionHistory.push(action);
  }

  switchToNextCommander(roundState : RoundState, battle : Battle): Boolean {
    let roundCanGoOn = true;
    let currentCommander = roundState.actingCommander;
    let nextCommander = battle.involvedArmies.map(army => army.leaders.filter(leader => leader.id===army.commanderId)[0]).find(commander => commander.id!=currentCommander.id);    
    let availableLeadersForCurrentCommander = this.standingLeadersOfCommanderPipe.transform(battle, roundState, currentCommander.id).length;
    let availableLeadersForNextCommander = this.standingLeadersOfCommanderPipe.transform(battle, roundState, nextCommander.id).length;
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

  /*
  private findAvailableLeaders (roundState : RoundState, battle : Battle, commander : Leader) : Leader[]{
    return battle.involvedArmies.find(army => army.commanderId==commander.id)
      .cohorts.map(cohort => cohort.leader)
      .filter(
        leader => !roundState.actionHistory
          .filter(action => action.executionRound===roundState.roundIndex)
          .map(action => action.perpetrator.id)
          .includes(leader.id));
  }
  */
  ngOnInit(): void {
    this.currentAction = {
      description: null,
      executionRound: -1,
      perpetratorId: null,
      attritionCaused: 0,
      panicCaused: 0,
      panicRemoved: 0
    }
  }

}
