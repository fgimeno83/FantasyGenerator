import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LevelComponent } from './level/level.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { TreasureComponent } from './treasure/treasure.component';
import { PersonalContainerComponent } from './personal-container/personal-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LevelComponent,
    NumberInputComponent,
    TreasureComponent,
    PersonalContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
