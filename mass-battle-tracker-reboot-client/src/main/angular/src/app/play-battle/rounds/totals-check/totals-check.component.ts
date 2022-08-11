import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Army, Battle, ExecutedAction, RoundState, StrategicObjective } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';

@Component({
  selector: 'totals-check',
  templateUrl: './totals-check.component.html',
  styleUrls: ['./totals-check.component.scss']
})
export class TotalsCheckComponent implements OnInit {

  battle : Battle;
  roundState : RoundState;

  constructor(private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battle = this.router.getCurrentNavigation().extras.state.battle;
      this.roundState = this.router.getCurrentNavigation().extras.state.roundState;
    }
  }

  ngOnInit(): void {}

  onSubmit() : void {
    this.registerTotals();
    this.updateBattle()
    .then(
      response => {
        console.info("Remote battle has been updated:\n" + JSON.stringify(response));
        this.battle = response;
        console.debug("Upon submission, roundState is\n" + JSON.stringify(this.roundState, null, 4));
        this.router.navigateByUrl('/play-battle/rounds/round-summary', {
          state: {battle: this.battle, roundState : this.roundState}
        });
      }
    );
  }

  determineAttritionSuffered(army : Army) : number {
    return this.retrieveHostileActions(army)
      .map(action => action.attritionCaused ? action.attritionCaused : 0)
      .reduce((a,b)=>a+b,0);
  }

  determinePanicSuffered(army : Army) : number {
    return this.retrieveHostileActions(army)
      .map(action => action.panicCaused ? action.panicCaused : 0)
      .reduce((a,b)=>a+b,0);
  }

  determinePanicRemoved(army : Army) : number {
    return this.retrieveFriendlyActions(army)
    .map(action => action.panicRemoved ? action.panicRemoved : 0)
    .reduce((a,b)=>a+b,0);
  }

  determineTotalAttritionSuffered(army : Army) : number {
    let attritionFromHostileObjectives = this.retrieveHostileObjective(army)?.attritionCaused;
    return this.determineAttritionSuffered(army) + (attritionFromHostileObjectives ? attritionFromHostileObjectives : 0);
  }

  determineTotalPanicSuffered(army : Army) : number {
    let panicFromHostileObjectives = this.retrieveHostileObjective(army)?.panicCaused;
    return this.determinePanicSuffered(army) + (panicFromHostileObjectives ? panicFromHostileObjectives : 0);
  }

  determineTotalPanicRemoved(army : Army) : number {
    let disiplineRecoveryFromFriendlyObjectives = this.retrieveFriendlyObjective(army)?.panicRemoved;
    return this.determinePanicRemoved(army) + (disiplineRecoveryFromFriendlyObjectives ? disiplineRecoveryFromFriendlyObjectives : 0);
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker-reboot/api/battle", this.battle).toPromise();
  }

  private retrieveHostileActions(army : Army) : ExecutedAction[] {
    return this.roundState.actionHistory
    .filter(action =>
      action.executionRound===this.roundState.roundIndex
      && !army.leaders.map(leader => leader.id).includes(action.perpetratorId));
  }
  private retrieveFriendlyActions(army : Army) : ExecutedAction[] {
    return this.roundState.actionHistory
    .filter(action =>
      action.executionRound===this.roundState.roundIndex
      && army.leaders.map(leader => leader.id).includes(action.perpetratorId));
  }
  private retrieveHostileObjective(army : Army) : StrategicObjective {
    let opposingArmy = this.battle.involvedArmies.find(anArmy => anArmy!=army);
    return this.roundState.currentObjectivePerArmyId[opposingArmy.id].reached
    ? this.roundState.currentObjectivePerArmyId[opposingArmy.id]
    : null;
  }
  private retrieveFriendlyObjective(army : Army) : StrategicObjective {
    return this.roundState.currentObjectivePerArmyId[army.id].reached
    ? this.roundState.currentObjectivePerArmyId[army.id]
    : null;
  }

  private registerTotals() : void {
    this.battle.involvedArmies.forEach(
      army => {
        this.roundState.scorePerArmyId[army.id].totalAttritionSuffered = this.determineTotalAttritionSuffered(army);
        this.roundState.scorePerArmyId[army.id].totalPanicSuffered = this.determineTotalPanicSuffered(army);
        this.roundState.scorePerArmyId[army.id].totalPanicRemoved = this.determineTotalPanicRemoved(army);
        this.roundState.scorePerArmyId[army.id].totalCasualtiesSuffered = this.roundState.scorePerArmyId[army.id].totalAttritionSuffered;
      });
  }
}
