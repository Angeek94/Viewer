import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { Presenter } from '../presenter';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  presenters: Presenter[] = [];
  presentersSubscription: any;

  constructor(private backEnd: BackEndService) {

  }
  getPresenters() {
    this.backEnd.getPresenters().subscribe((presenters) => {
      this.presenters = presenters;
    });
  }

  ngOnInit() {
  
      this.getPresenters();

  }

  ngOnDestroy() {

    this.presentersSubscription.unsubscribe();
  }
}
