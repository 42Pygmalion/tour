import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
        { id: 11, name: 'Luffy' },
        { id: 12, name: 'Zoro' },
        { id: 13, name: 'Sanji' },
        { id: 14, name: 'Nami' },
        { id: 15, name: 'Chopper' },
        { id: 16, name: 'Robin' },
        { id: 17, name: 'Sunny' },
        { id: 18, name: 'Franky' },
        { id: 19, name: 'Ussop' },
        { id: 20, name: 'Brook' }
    ];
    return {heroes};
  }
}