import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LevelComponent } from './compound/level/level.component';
import { NumberInputComponent } from './compound/number-input/number-input.component';
import { TreasureComponent } from './treasure/treasure.component';
import { PersonalContainerComponent } from './personal-container/personal-container.component';
import { ResultPresenterComponent } from './result-presenter/result-presenter.component';
import { CompoundComponent } from './compound/compound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LevelComponent,
    NumberInputComponent,
    TreasureComponent,
    PersonalContainerComponent,
    ResultPresenterComponent,
    CompoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
