import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  title = 'PlatziSquare';
  lat: number = -11.9472227;
  lng: number = -77.063395;
  places = null;
  constructor(private placesService: PlacesService) {
    placesService.getPlaces().valueChanges().subscribe( places => {
        this.places = places;
      });
  }
}
