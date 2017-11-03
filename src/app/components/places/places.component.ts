import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  animations: [
    trigger('animateBoxBackground', [
      state('start', style({
        background: 'rgba(115, 186, 110, 0.2)'
      })),
      state('done', style({
        background: 'rgba(115, 186, 110, 0.6)'
      })),
      transition('start => done', animate(1200)),
      transition('done => start', animate(1200))
    ])
  ]
})
export class PlacesComponent {
  title = 'PlatziSquare';
  state = 'start';
  lat: number = -11.9472227;
  lng: number = -77.063395;
  places = null;
  message = '';
  messageType = '';
  showMessage = false;
  constructor(private placesService: PlacesService) {
    placesService.getPlaces().subscribe(
        result => {
        this.places = Object.keys(result).map( key => result[key]);
    }, error => {
      debugger;
        this.message = error.statusText;
        this.messageType = 'error';
        this.showMessage = true;
    });
  }
  private animate() {
    this.state = (this.state === 'done') ? 'start' : 'done';
  }
  private animationDone(event) {
    this.animate();
  }
}
