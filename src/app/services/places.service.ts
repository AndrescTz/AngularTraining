import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlacesService {
    API_ENDPOINT = 'https://platzisquare-8f0a7.firebaseio.com';
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
    constructor(private afDB: AngularFireDatabase, private http: Http) { }
    public getPlaces() {
        /*   SOCKETS   */
        //return this.afDB.list('places/');
        /* ----------- */

        return this.http.get(`${this.API_ENDPOINT}/.json`)
        .map( result => { //I imported rxjs reference fot this 'map'
            const data = result.json().places;
            return data;
        });

    }
    public findPlace(id){
        return this.afDB.object(`places/${id}`);
    }
    public savePlace(place) {
        /*   SOCKETS   */
        //return this.afDB.database.ref(`places/${place.id}`).set(place);
        /* ----------- */

        /*     HTTP    */
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post(
            `${this.API_ENDPOINT}/places.json`,
            place,
            {
                headers:headers
            }
        );
        /* ----------- */
    }
    public getGeoData(address){
        return this.http.get(`http://maps.google.com/maps/api/geocode/json?address=${address}`);
    }
}
