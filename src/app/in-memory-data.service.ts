import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Blogentry } from './blogentry';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const entry = [
      {
        id: 1,
        title: 'Citytrip',
        destination: 'Australia',
        description: 'A City to find love!',
        date: '12.12.2020',
        content: this.mockContentdreator('wöjebvwjenvwnek'),
      },
      {
        id: 2,
        title: 'Roundtrip',
        destination: 'Germany',
        description: 'Great tour with children!',
        date: '13.12.2020',
        content: this.mockContentdreator('wöjebvwjenvwnek'),
      },
      {
        id: 3,
        title: 'Offroad',
        destination: 'Russia',
        description: 'Place to be!',
        date: '14.12.2020',
        content: this.mockContentdreator('wöjebvwjenvwnek'),
      },
      {
        id: 4,
        title: 'Backpacktrip',
        destination: 'Arabia',
        description: 'Nobody was here before!',
        date: '15.12.2020',
        content: this.mockContentdreator('wöjebvwjenvwnek'),
      },
      {
        id: 5,
        title: 'Partyholidays',
        destination: 'Kenya',
        description: 'People are crazy!',
        date: '16.12.2020',
        content: this.mockContentdreator('wöjebvwjenvwnek'),
      },
      {
        id: 6,
        title: 'Surftrip',
        destination: 'Mexico',
        description: 'Water is cold!',
        date: '17.12.2020',
        content: this.mockContentdreator('wöjebvwjenvwnek'),
      },
    ];
    return { entry };
  }

  mockContentdreator(text: string): string {
    let mockText = text;
    for (let i = 0; i < 100; i++) {
      mockText += text + 'whatsup';
    }
    return mockText;
  }
}
