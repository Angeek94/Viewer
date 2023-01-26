import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private backEnd: BackEndService) { }

  ngOnInit() {
    this.backEnd.getPresenters().subscribe((presenter)=>{
      console.log(presenter);
    });

    this.backEnd.getParticipants().subscribe((participants)=>{
      console.log(participants);
    });
  }

}
