import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';

@Component({
  selector: 'commander-selection',
  templateUrl: './commander-selection.component.html',
  styleUrls: ['./commander-selection.component.scss']
})
export class CommanderSelectionComponent implements OnInit {
  
  pageTitle = '"Initiative" phase: select a commander for every involved Army';

  battle : Battle;

  constructor(private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battle = this.router.getCurrentNavigation().extras.state.battle;
    }
    else {
      this.battle = {
        "description": "The Scorpion tries to snatch Kenson Gakka back from Lion hands",
        "involvedArmies": [
            {
                "leaders": [
                    {
                      "clan": "",
                      "name": "Bayushi Ogoi",
                      "commander" : false
                    },
                    {
                      "clan": "",
                      "name": "Shosuro Ageko",
                      "commander" : false
                    }
                ],
                "currentCasualties": 0,
                "currentPanic": 0,
                "description": "",
                "discipline": 70,
                "mainClan": "Scorpion",
                "name": "Scorpion attackers",
                "strength": 70
            },
            {
                "leaders": [
                    {
                      "clan": "Lion",
                      "name": "Matsu Mitsui",
                      "commander" : false
                    },
                    {
                      "clan": "Crab",
                      "name": "Hida Gamagori",
                      "commander" : false
                    }
                ],
                "currentCasualties": 0,
                "currentPanic": 0,
                "description": "",
                "discipline": 80,
                "mainClan": "Lion",
                "name": "Lion defenders",
                "strength": 100
            }
        ],
        "name": "The Battle of Kenson Gakka"
    };
    }
    console.debug("Component has been constructed, battle is " + JSON.stringify(this.battle));
  }

  ngOnInit(): void {
  }

  private updateBattle(): Promise<Battle> {
    this.battle.involvedArmies.forEach(
      army => {
        army.leaders.forEach(
          leader => {
            if(leader.id==army.commanderId) {
              leader.commander = true;
            }
          }
        )
      }
    );
    return this.httpClient
    .put<Battle>("/mass-battle-tracker-reboot/api/battle", this.battle).toPromise();
  }

  onSubmit() : void {
    console.debug("Commanders have been selected, battle is:\n" + JSON.stringify(this.battle, null, 4));
    if(this.battle.involvedArmies.filter(army => !army.commanderId).length>0) {
      console.warn("Not all commanders have been set");
    }
    else {
      this.updateBattle()
      .then(
        response => {
          console.info("Remote battle has been updated:\n" + JSON.stringify(response));
          this.battle = response;
          this.router.navigateByUrl('/play-battle/initiative/initiative-recording', {
            state: {battle: this.battle}
          });
        }
      );
    }
  }
}
