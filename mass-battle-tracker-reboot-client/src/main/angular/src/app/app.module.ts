import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';

import { LandingModule } from './landing/landing.module';
import { NewBattleModule } from './new-battleEntity/new-battleEntity.module';
import { ResumeBattleModule } from './resume-battleEntity/resume-battleEntity.module';
import { PlayBattleModule } from './play-battleEntity/play-battleEntity.module';
import { InitiativeModule } from './play-battleEntity/initiative/initiative.module';
import { RoundsModule } from './play-battleEntity/rounds/rounds.module';

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
