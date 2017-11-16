import {Component, forwardRef, Inject} from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {AppComponent} from "../../app.component";
import {AuthorizationService} from "../../services/authorization.service";
import { Router } from '@angular/router';

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
  ],
  providers: [AppComponent]
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
  isLogged: boolean;
  constructor(
    private placesService: PlacesService,
    @Inject(forwardRef(() => AppComponent)) appComp: AppComponent, private authService: AuthorizationService, private router: Router) {
      //this.isLogged = appComp.getLoggedIn();
      this.loggedStatus();
      placesService.getPlaces().valueChanges().subscribe(
          result => {
          this.places = Object.keys(result).map( key => result[key]);
          }/*, error => {
          this.message = error.statusText;
          this.messageType = 'error';
          this.showMessage = true;
      }*/);
  }
  private loggedStatus(){
    this.authService.isLogged().subscribe(
      result => {
        this.isLogged = ( result && result.uid ) ? true : false;
        if(this.isLogged){
          this.getUserLogged();
        }
      }, error => {
        this.isLogged = false;
      }
    );
  }
  private animate() {
    //this.state = (this.state === 'done') ? 'start' : 'done';
  }
  private animationDone(event) {
    this.animate();
  }
  private getUserLogged(){
    console.log("AuhService", this.authService);
  }
  private newPlace() {
    this.router.navigate(['/create']);
  }
}
