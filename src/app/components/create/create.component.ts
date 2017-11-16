import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../services/places.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  place: any = {};
  placeTitle: string = '';
  isNew: boolean = true;
  results$: Observable<any>;
  private searchField: FormControl;
  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private placesService: PlacesService,
    private http: Http) {
      let action = this.route.snapshot.queryParams['action'];
      this.setIsNew(action);
      const URL= 'https://maps.google.com/maps/api/geocode/json';
      this.searchField = new FormControl();
      this.results$ = this.searchField.valueChanges
          .debounceTime(500)
          .switchMap(query => this.http.get(`${URL}?address=${query}`))
          .map(response => response.json())
          .map(response => response.results);

  }
  setIsNew(action){
    const id = this.route.snapshot.params['id'];
    if(action === 'edit'){
      this.isNew = false;
      this.placesService.findPlace(id).valueChanges().subscribe( place => {
        this.place = place;
        this.placeTitle = this.place.name;
      });
    }
    else{
      this.placeTitle = 'New Place';
    }
  }
  savePlace() {
    const { street, city, country } = this.place;
    const address = `${street},${city},${country}`;
    this.placesService.getGeoData(address).subscribe(
      result => {
        this.place.lat = result.json().results[0].geometry.location.lat;
        this.place.lng = result.json().results[0].geometry.location.lng;
        this.saveNewPlace();
      }
    );    
  }
  saveNewPlace(){
    if(this.isNew){
      this.place.id = Date.now();
    }
    this.placesService.savePlace(this.place, error => {
        if (!error) {
          alert('Successfully saved!!!...');
          this.router.navigate(['/places']);
        }
      });
  }
  selectAddress(address) {
      this.place.street = `${address[1].long_name} ${address[0].long_name}`;
      this.place.city = address[3].long_name;
      this.place.country = address[5].long_name;
      this.results$ = Observable.empty<Response>();
  }
}
