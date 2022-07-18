import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle, RoundState } from 'src/app/shared/data-model/mass-battle-tracker-server';

@Component({
  selector: 'first-move',
  templateUrl: './first-move.component.html',
  styleUrls: ['./first-move.component.scss']
})
export class FirstMoveComponent implements OnInit {

  battleEntity : Battle;
  roundState : RoundState;
  pageTitle = `"Rounds" phase: determine who makes the first move`;

  constructor(private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battleEntity = this.router.getCurrentNavigation().extras.state.battleEntity;
      this.roundState = this.router.getCurrentNavigation().extras.state.roundState;
    }
  }

  ngOnInit(): void {
    this.pageTitle = `Rounds phase (round {this.roundState.roundIndex}): determine who makes the first move`;
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker/api/battleEntity", this.battleEntity).toPromise();
  }

  onSubmit(): void {
    this.updateBattle()
    .then(
      response => {
        console.info("Remote battleEntity has been updated:\n" + JSON.stringify(response));
        this.battleEntity = response;
        console.debug("Upon submission, roundState is\n" + JSON.stringify(this.roundState, null, 4));
        this.router.navigateByUrl('/play-battleEntity/rounds/leader-selection', {
          state: {battleEntity: this.battleEntity, roundState : this.roundState}
        });
      }
    );
  }
}
