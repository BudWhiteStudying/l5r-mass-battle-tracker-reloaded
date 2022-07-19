import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';

import { LandingModule } from './landing/landing.module';
import { NewBattleModule } from './new-battle/new-battle.module';
import { ResumeBattleModule } from './resume-battle/resume-battle.module';
import { PlayBattleModule } from './play-battle/play-battle.module';
import { InitiativeModule } from './play-battle/initiative/initiative.module';
import { RoundsModule } from './play-battle/rounds/rounds.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LandingModule,
    NewBattleModule,
    ResumeBattleModule,
    PlayBattleModule,
    InitiativeModule,
    RoundsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
