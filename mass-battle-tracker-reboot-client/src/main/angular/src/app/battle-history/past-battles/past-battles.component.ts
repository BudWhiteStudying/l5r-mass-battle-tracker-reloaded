import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Battle, Battles } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';

@Component({
  selector: 'past-battles',
  templateUrl: './past-battles.component.html',
  styleUrls: ['./past-battles.component.scss']
})
export class PastBattlesComponent implements OnInit {

  pastBattles : Battle[];
  pageTitle = "Battles happened in the past";

  constructor(private httpClient : HttpClient) { }

  private getPastBattles() {
    return this.httpClient
    .get<Battles>("/mass-battle-tracker-reboot/api/battle/completed").toPromise()
    .then(
      response => {
        console.info("Retrieved initialized battle: " + JSON.stringify(response));
        this.pastBattles = response.battles;
      }
    );
  }

  getDetailedInfo(battle : Battle) {
    console.log("Detailed info about battle:\n"+JSON.stringify(battle));
  }

  ngOnInit(): void {
    this.getPastBattles();
  }

}
