import { Component } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { Presenter } from '../presenter';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent {
  presenters: Presenter[] = [];
  presentersSubscription: any;

  constructor(private backEnd:BackEndService){

  }
  ngOnInit(){
   this.presentersSubscription= this.backEnd.getPresenters().subscribe((presenters) => {
      this.presenters = presenters;
    });
  }

  ngOnDestroy() {
  
    this.presentersSubscription.unsubscribe();
  }
}
