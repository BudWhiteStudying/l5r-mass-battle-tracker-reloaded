import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle, Battles } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';

@Component({
  selector: 'available-battles',
  templateUrl: './available-battles.component.html',
  styleUrls: ['./available-battles.component.scss']
})
export class AvailableBattlesComponent implements OnInit {

  constructor(private httpClient : HttpClient,
    private router : Router) { }

  availableBattles : Battle[];
  pageTitle = "Pick a battle to resume";

  private retrieveBattles(): void {
    this.httpClient
    .get<Battles>("/mass-battle-tracker-reboot/api/battle/unfinished",{}).toPromise()
    .then(
      response => {
        console.info("Retrieved initialized battle: " + JSON.stringify(response));
        this.availableBattles = response.battles;
      }
    );
  }

  resumeBattle(battle : Battle) {
    let haveCommandersBeenDefined : boolean = true;
    let hasInitiativeBeenRolled : boolean = true;
    let haveCohortsBeenDefined : boolean = true;
    battle.involvedArmies.forEach(army => {
      if(!army.commanderId && army.commanderId!==0)
        haveCommandersBeenDefined = false;
      else {
        const commanderInitiative = army.leaders.find(leader => leader.id===army.commanderId).initiative;
        if(!commanderInitiative && commanderInitiative!==0) {
          hasInitiativeBeenRolled = false;
        }
      }
      if(!army.cohorts || army.cohorts.length==0) {
        haveCohortsBeenDefined = false;
      }
    });
    if(!haveCommandersBeenDefined) {
      this.router.navigateByUrl('/play-battle/initiative/commander-selection', {
        state: {battle: battle}
      });
    }
    else if(!hasInitiativeBeenRolled) {
      this.router.navigateByUrl('/play-battle/initiative/initiative-recording', {
        state: {battle: battle}
      });
    }
    else if(!haveCohortsBeenDefined) {
      this.router.navigateByUrl('/play-battle/initiative/leaders-selection', {
        state: {battle: battle}
      });
    }
    else {
      this.router.navigateByUrl('/play-battle/rounds/objective-selection', {
        state: {battle: battle}
      });
    }
  }

  ngOnInit(): void {
    this.retrieveBattles();
  }

}
