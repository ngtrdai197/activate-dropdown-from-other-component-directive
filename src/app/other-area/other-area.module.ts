import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherAreaComponent } from './other-area.component';
import { ActionComponent } from './action/action.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OtherAreaComponent, ActionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ActionComponent }]),
  ],
})
export class OtherAreaModule { }
