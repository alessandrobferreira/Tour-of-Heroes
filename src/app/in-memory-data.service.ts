import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes =  [

      { id: 1, name: 'Batman' },
      { id: 2, name: 'Spiderman' },
      { id: 3, name: 'Superman' },
      { id: 4, name: 'Flash' },
      { id: 5, name: 'Deadpool' },
      { id: 6, name: 'Hulk' },
      { id: 7, name: 'Thor' },
      { id: 8, name: 'Aquaman' },
      { id: 9, name: 'Wolverine' },
      { id: 0, name: 'Venom' }
    ];

    return {heroes};
   }

   genId(heroes: Hero[]): number {
     return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 9;
   }

}
