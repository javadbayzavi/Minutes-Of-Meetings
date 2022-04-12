import { Component } from "@angular/core";
import { component } from "src/lib/core/components/component";
import { meetings } from "src/models/meetings";

@Component({
    selector: 'meetings-list',
    templateUrl: './meetings.list.html',
    styleUrls: ['./meetings.list.css']
  })
  export class meeting_list {

    constructor(serviceProv meetingservice)
  }
  