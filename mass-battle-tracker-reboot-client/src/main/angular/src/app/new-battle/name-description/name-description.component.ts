import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { Subscription } from 'rxjs';
import {isEqualWith} from "lodash";
import {isNullOrEmptyString} from "../../shared/utility/string.utility";

import { Battle } from "../../shared/data-model/mass-battle-tracker-reboot-server";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'name-description',
  templateUrl: './name-description.component.html',
  styleUrls: ['./name-description.component.scss']
})
export class NameDescriptionComponent implements OnInit {
  
  pageTitle = "Set name and description of the Battle";

  private battle: Battle;
  private battleFormValueChangesSubscription: Subscription;

  newBattleForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.retrieveInitializedBattle();
    this.buildBattleForm();
  }

  ngOnDestroy(): void {
    this.battleFormValueChangesSubscription.unsubscribe();
  }

  onSubmit(): void {
    console.log("You clicked NEXT with name = " + this.newBattleForm.value.name + " and description = " + this.newBattleForm.value.description);
    if(this.newBattleForm.valid) {
      this.updateLocalBattleToFormValues();
      this.updateBattle()
      .then(
        response => {
          console.info("Remote battle has been updated:\n" + JSON.stringify(response));
          this.battle = response;
          this.router.navigateByUrl('/new-battle/involved-armies', {
            state: {battle: this.battle}
          });
        }
      );
    }
    else {
      console.warn("yeah no");
    }
  }

  //TODO: get rid of form
  private updateLocalBattleToFormValues() : void {
    this.battle.name = this.newBattleForm.value.name;
    this.battle.description = this.newBattleForm.value.description;
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker-reboot/api/battle", this.battle).toPromise();
  }

  private retrieveInitializedBattle(): void {
    this.httpClient
    .post<Battle>("/mass-battle-tracker-reboot/api/battle",{}).toPromise()
    .then(
      response => {
        console.info("Retrieved initialized battle: " + JSON.stringify(response));
        this.battle = response;
      }
    );
  }

  private buildBattleForm(): void {
    this.newBattleForm = this.formBuilder.group({
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    });

    let formInitialValue = this.newBattleForm.value;
    this.battleFormValueChangesSubscription = this.newBattleForm.valueChanges
      .subscribe(() => {
        let formCurrentValueEqualsInitialValue = isEqualWith(formInitialValue, this.newBattleForm.getRawValue(),
          (field1, field2) => { // treat empty and null strings as equal
            if (isNullOrEmptyString(field1) && isNullOrEmptyString(field2))
              return true;
          })

        if (formCurrentValueEqualsInitialValue)
          this.newBattleForm.markAsPristine()
      })
  }
}
