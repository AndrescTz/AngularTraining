import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlacesService {
    API_ENDPOINT = 'https://platzisquare-8f0a7.firebaseio.com';
    places: any = [];
    constructor(private afDB: AngularFireDatabase, private http: Http) { }
    public getPlaces() {
        /*   SOCKETS   */
        // return this.afDB.list('places/');
        /* ----------- */

        return this.http.get(`${this.API_ENDPOINT}/.json`)
        .map( result => { // rxjs reference fot this 'map'
            const data = result.json().places;
            return data;
        });

    }
    public findPlace(id){
        return this.afDB.object(`places/${id}`);
    }
    public savePlace(place) {
        /*   SOCKETS   */
        // return this.afDB.database.ref(`places/${place.id}`).set(place);
        /* ----------- */

        /*     HTTP    */
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(
            `${this.API_ENDPOINT}/places.json`,
            place,
            {
                headers: headers
            }
        );
        /* ----------- */
    }
    public getGeoData(address){
        return this.http.get(`http://maps.google.com/maps/api/geocode/json?address=${address}`);
    }
}
