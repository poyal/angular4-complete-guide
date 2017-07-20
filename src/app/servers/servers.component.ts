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
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    console.log(this.serverCreationStatus);
    this.serverCreationStatus = 'Server Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateLog(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
  }
}
