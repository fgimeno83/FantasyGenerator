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
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { LevelComponent } from './compound/level/level.component';
import { NumberInputComponent } from './compound/number-input/number-input.component';
import { TreasureComponent } from './treasure/treasure.component';
import { PersonalContainerComponent } from './personal-container/personal-container.component';
import { ResultPresenterComponent } from './result-presenter/result-presenter.component';
import { CompoundComponent } from './compound/compound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HoardContainerComponent } from './hoard-container/hoard-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LevelComponent,
    NumberInputComponent,
    TreasureComponent,
    PersonalContainerComponent,
    ResultPresenterComponent,
    CompoundComponent,
    HoardContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
