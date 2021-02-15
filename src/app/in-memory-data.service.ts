import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Blogentry } from './blogentry';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  constructor() { }
  createDb() {
    const entry = [
      {id: 1, title: 'Citytrip', destination: 'Australia', description: 'Wir waren hier!'},
      {id: 2, title: 'Roundtrip', destination: 'Germany', description: 'Wir waren hier!'},
      {id: 3, title: 'Offroad', destination: 'Russia', description: 'Wir waren hier!'},
      {id: 4, title: 'Backpacktrip', destination: 'Arabia', description: 'Wir waren hier!'},
      {id: 5, title: 'Partyholidays', destination: 'Kenya', description: 'Wir waren hier!'},
      {id: 6, title: 'Surftrip', destination: 'Mexico', description: 'Wir waren hier!'},
    ];
    return {entry};
  }
}
