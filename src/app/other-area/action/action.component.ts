import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public onOpen() {
    document.getElementById('dropdownMenu').classList.add('show')
  }
}
