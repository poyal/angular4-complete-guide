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
  allowNewServer = false;
  serverCreationStatus = 'No Server Creations!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Created!';
  }
}
