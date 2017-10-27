import { Injectable } from '@angular/core';

@Injectable()
export class PlacesService {
    places: any = [
        {id: 1, name: 'Place - Option 1', plan: 'free', closeness: 1, distance: 1, active: true },
        {id: 2, name: 'Place - Option 2', plan: 'pay', closeness: 3, distance: 80, active: false },
        {id: 3, name: 'Place - Option 3', plan: 'free', closeness: 2, distance: 15, active: true },
        {id: 4, name: 'Place - Option 4', plan: 'pay', closeness: 1, distance: 1.5, active: false },
        {id: 5, name: 'Place - Option 5', plan: 'pay', closeness: 3, distance: 110, active: true },
        {id: 6, name: 'Place - Option 6', plan: 'free', closeness: 2, distance: 25, active: true },
        {id: 7, name: 'Place - Option 7', plan: 'free', closeness: 2, distance: 55, active: true },
        {id: 8, name: 'Place - Option 8', plan: 'pay', closeness: 1, distance: 0.5, active: true },
        {id: 9, name: 'Place - Option 9', plan: 'free', closeness: 2, distance: 35, active: true },
        {id: 10, name: 'Place - Option 10', plan: 'free', closeness: 2, distance: 46, active: true },
        {id: 11, name: 'Place - Option 11', plan: 'pay', closeness: 1, distance: 2, active: true },
        {id: 12, name: 'Place - Option 12', plan: 'free', closeness: 3, distance: 250, active: true }
      ];
    constructor() { }
    public getPlaces(){
        return this.places;
    }

}