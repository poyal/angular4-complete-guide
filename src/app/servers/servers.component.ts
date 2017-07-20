import {Component, OnInit} from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`
    p {
      color: green;
    }
  `]
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
