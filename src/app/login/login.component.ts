import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackEndService } from '../back-end.service';
import { Participant } from '../participant';
import { Presenter } from '../presenter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  presenters: Presenter[] = [];
  participants: Participant[] = [];

  fname: string = "";
  lname: string = "";

  constructor(private router: Router, private backEnd: BackEndService) { }


  ngOnInit() {
    this.backEnd.getPresenters().subscribe((presenter: Presenter[]) => {
      console.log(presenter);
      this.presenters = presenter;

    });

    this.backEnd.getParticipants().subscribe((participants: Participant[]) => {
      console.log(participants);
      this.participants = participants
    });

  }

  goPresenterOrPartecipant() {

    console.log(this.fname + this.lname);

    this.fname = this.fname.replaceAll(' ', '');
    this.lname = this.lname.replaceAll(' ', '');

    const partecipant = this.participants.find(element => element.name == this.fname && element.lname == this.lname);
    const presenter = this.presenters.find(element => element.name == this.fname && element.lname == this.lname);
    


    if (partecipant != undefined) {
      this.router.navigate(["participant",partecipant.id]);

    } else if (presenter != undefined && presenter.name == this.fname && presenter.lname == this.lname) {
      this.router.navigate(["presenter",presenter.id]);

    } else {
      alert("User not found");

    }
  }
}
