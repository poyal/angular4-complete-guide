import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[app-template]',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
