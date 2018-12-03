import { Component, OnInit, Input } from '@angular/core';
import { EventDataService } from '../event-data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @Input() event: any;
  dataReader: any;
  constructor(private dataService: EventDataService) { }
  ngOnInit() {
    this.dataReader = this.dataService.getData();
    console.log(this.dataReader);
  }

}
