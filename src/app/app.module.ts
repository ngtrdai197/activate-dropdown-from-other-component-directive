import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { API_URL } from './constants';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./other-area/other-area.module').then(
            (m) => m.OtherAreaModule
          ),
      },
    ]),
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.apiUrl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
