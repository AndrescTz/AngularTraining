import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  place: any = {};
  placeTitle: string = '';
  isNew: boolean = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private placesService: PlacesService) {
      let action = this.route.snapshot.queryParams['action'];
      this.setIsNew(action);
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
    this.placesService.savePlace(this.place)
      .subscribe( result => {
        alert('Successfully saved!!!...');
        this.router.navigate(['/places']);
      });
  }
}
