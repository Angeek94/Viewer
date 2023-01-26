import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Presenter } from './presenter';
import { Participant } from './participant';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }


  getPresenters() {
    return this.http.get<Presenter[]>(this.url + "presenter");
  }

  getParticipants() {
    return this.http.get<Participant[]>(this.url + "participants");
  }

  startPresentation(id: number,technologyChoosen:string) {
    return this.http.put<Participant[]>(this.url + "presenter/"+id, {
      "id": id,
      "name": "Tizio",
      "lname": "Rossi",
      "titlePresentation": "New presentation",
      "technologiesSharing": ["VNC", "WebRTC"],
      "tecnologyChoosen":technologyChoosen,
      "statePresentation":"on"
    });
  }
  stopPresentation(id: number,technologyChoosen:string) {
    return this.http.put<Participant[]>(this.url + "presenter/"+id, {
      "id": id,
      "name": "Tizio",
      "lname": "Rossi",
      "titlePresentation": "New presentation",
      "technologiesSharing": ["VNC", "WebRTC"],
      "tecnologyChoosen":technologyChoosen,
      "statePresentation":"off"

    });
  }
}
