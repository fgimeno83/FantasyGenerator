import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalContainerComponent } from './personal-container/personal-container.component';


const routes: Routes = [
  {
    path: '',
    component: PersonalContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
