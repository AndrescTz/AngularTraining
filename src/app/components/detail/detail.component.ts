import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id = null;
  places = null;
  place: any = { };

  constructor(private route: ActivatedRoute, private placesService: PlacesService) {
    this.id = this.route.snapshot.params['id'];
    this.place = {
      name: '',
      description: '',
      distance: 0,
      plan: ''
    }
    // --------------------------------------------
    this.places = placesService.getPlaces();
    this.place = placesService.findPlace(this.id).valueChanges().subscribe( place => {
      this.place = place;
    });
  }
}
