import { Injectable } from '@angular/core';
import { BackEndService } from './back-end.service';

@Injectable({
  providedIn: 'root'
})
export class ManagestateService {
  statePresentantion: string="" ;

  constructor() { }

  getStatePresentation() {
    return this.statePresentantion;
  }

  setStatePresentation(statePresentantion: string) {

    this.statePresentantion = statePresentantion;
  }


}
