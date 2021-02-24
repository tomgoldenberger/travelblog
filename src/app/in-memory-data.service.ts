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
        content:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
          'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
          'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
          'ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
          'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
          'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
          'ipsum dolor sit amet.' +
          'ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
          'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
          'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
          'ipsum dolor sit amet.',
      },
      {
        id: 2,
        title: 'Roundtrip',
        destination: 'Germany',
        description:
          'Great tour with children! Next time we will hopefully see some crazy rocks! Dont do this with a doog',
        date: '13.12.2020',
        content:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
          'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
          'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
          'ipsum dolor sit amet.',
      },
      {
        id: 3,
        title: 'Offroad',
        destination: 'Russia',
        description: 'Place to be!',
        date: '14.12.2020',
        content:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
          'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
          'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
          'ipsum dolor sit amet.',
      },
      {
        id: 4,
        title: 'Backpacktrip',
        destination: 'Arabia',
        description: 'Nobody was here before!',
        date: '15.12.2020',
        content:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
          'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
          'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
          'ipsum dolor sit amet.',
      },
      {
        id: 5,
        title: 'Partyholidays',
        destination: 'Kenya',
        description: 'People are crazy!',
        date: '16.12.2020',
        content:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
          'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
          'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
          'ipsum dolor sit amet.',
      },
      {
        id: 6,
        title: 'Surftrip',
        destination: 'Mexico',
        description: 'Water is cold!',
        date: '17.12.2020',
        content:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
          'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
          'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
          'ipsum dolor sit amet.',
      },
      {
        id: 7,
        title: 'Wellness',
        destination: 'Schweiz',
        description:
          'Relax all day long with a beautiful view wonderful to be alive!',
        date: '18.12.2020',
        content:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
          'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
          'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
          'ipsum dolor sit amet.',
        picture: '/assets/bspBild.jpg',
      },
      {
        id: 8,
        title: 'test',
        destination: 'usbeckistan',
        description:
          'Relax all day long with a beautiful view wonderful to be alive!',
        date: '18.12.2020',
        content:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
          'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
          'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,' +
          'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ' +
          'ipsum dolor sit amet.',
        picture: '/assets/bspBild.jpg',
      },
    ];
    return { entry };
  }
  // Overrides the genId method to ensure that a Blogentry always has an id.
  // If the Blogentry array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // Blogentry id + 1.
  genId(blogentrys: Blogentry[]): number {
    return blogentrys.length > 0
      ? Math.max(...blogentrys.map((blog) => blog.id)) + 1
      : 10;
  }
}
