import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'PlatziSquare';
//   ready = false;
//   firstname: string = '';
//   lastname: string = '';

//   constructor() {
//     setTimeout(() => {
//       this.ready = true;
//     }, 3000);
//   }

//   doSomething() {
//     alert('Doing something!');
//   }
// }
export class AppComponent {
  title = 'PlatziSquare';
  places: any = [
    {name: 'Place - Option 1', plan: 'free', closeness: 1, distance: 1, active: true},
    {name: 'Place - Option 2', plan: 'pay', closeness: 3, distance: 80, active: false},
    {name: 'Place - Option 3', plan: 'free', closeness: 2, distance: 15, active: true},
    {name: 'Place - Option 4', plan: 'pay', closeness: 1, distance: 1.5, active: false},
    {name: 'Place - Option 5', plan: 'pay', closeness: 3, distance: 110, active: true},
    {name: 'Place - Option 6', plan: 'free', closeness: 2, distance: 25, active: true},
  ];
  lat: number = -11.9472227;
  lng: number = -77.063395;
  constructor() {
  }
}
