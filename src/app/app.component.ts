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
    {name: 'Place - Option 1', active: true},
    {name: 'Place - Option 2', active: false},
    {name: 'Place - Option 3', active: true},
    {name: 'Place - Option 4', active: false},
    {name: 'Place - Option 5', active: true},
    {name: 'Place - Option 6', active: true},
  ];
  lat: number = -11.9472227;
  lng: number = -77.063395;
  constructor() {
  }
}
