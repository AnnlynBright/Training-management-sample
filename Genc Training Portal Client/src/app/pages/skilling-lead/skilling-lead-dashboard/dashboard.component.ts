import { Component, ViewEncapsulation } from '@angular/core';
//import { MaterialModule } from '../../material.module';

import { AppCardComponent } from 'src/app/components/card/card.component';
import { MaterialModule } from 'src/app/material.module';



@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [
    MaterialModule,
  ],
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SkillingLeadDashboardComponent { }