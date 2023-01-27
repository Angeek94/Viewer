import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackEndService } from '../back-end.service';
import { ManagestateService } from '../managestate.service';
import { Presenter } from '../presenter';

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.css']
})
export class PresenterComponent implements OnInit {
  sub: any;
  presenters: Presenter[] = [];
  id: number = 0;
  startPresentationSubscription: any;
  stopPresentationSubscription: any;
  titleWindow: string = "Shared Window";
  presentersSubscription: any;

  constructor(private backEnd: BackEndService, private route: ActivatedRoute, private manageState:ManagestateService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

   this.presentersSubscription= this.backEnd.getPresenters().subscribe((presenters) => {
      this.presenters = presenters;
    });


  }

  startPresentation() {
    var buttonManagePresentation = document.getElementById("presentationManage");

    if (buttonManagePresentation != null && buttonManagePresentation.innerText == "Start presentation") {
      buttonManagePresentation.innerText = "Stop presentation";
      this.startPresentationSubscription = this.backEnd.startPresentation(this.id, this.presenters[0].tecnologyChoosen).subscribe((response) => { console.log(response) });

      this.manageState.setStatePresentation(this.presenters[0].statePresentation);

      if (this.presenters[0].tecnologyChoosen == "VNC") {

        if (window.navigator.userAgent.indexOf("Android") > 0 || window.navigator.userAgent.indexOf("Ios") > 0) {
          this.presenters[0].mobileFlag = true;
          this.titleWindow = "Mobile Display";
        }

      }

    } else if (buttonManagePresentation != null && buttonManagePresentation.innerText == "Stop presentation") {

      buttonManagePresentation.innerText = "Start presentation";
      this.stopPresentationSubscription = this.backEnd.stopPresentation(this.id, "VNC").subscribe((response) => { console.log(response) });
      this.manageState.setStatePresentation(this.presenters[0].statePresentation);

    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.startPresentationSubscription.unsubscribe();
    this.stopPresentationSubscription.unsubscribe();
    this.presentersSubscription.unsubscribe();
  }

}
