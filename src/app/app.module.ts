import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { FieldComponent } from './field/field.component';
import { ContainerComponent } from './container/container.component';
import { ActionComponent } from './action/action.component';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { HitOrStandComponent } from './hit-or-stand/hit-or-stand.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    FieldComponent,
    ContainerComponent,
    ActionComponent,
    CardDeckComponent,
    HitOrStandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  entryComponents: [HitOrStandComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
