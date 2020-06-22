import { Component, Inject } from '@angular/core';
import { API_URL } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-bot';
  constructor(@Inject(API_URL) public apiUrl: string) {
    console.log('this.apiUrl', this.apiUrl);
  }
}
