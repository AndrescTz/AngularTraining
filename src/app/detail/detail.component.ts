import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  places: any = [
    {id: 1, name: 'Place - Option 1', plan: 'free', closeness: 1, distance: 1, active: true, description: "This is a random description."},
    {id: 2, name: 'Place - Option 2', plan: 'pay', closeness: 3, distance: 80, active: false, description: "This is a random description."},
    {id: 3, name: 'Place - Option 3', plan: 'free', closeness: 2, distance: 15, active: true, description: "This is a random description."},
    {id: 4, name: 'Place - Option 4', plan: 'pay', closeness: 1, distance: 1.5, active: false, description: "This is a random description."},
    {id: 5, name: 'Place - Option 5', plan: 'pay', closeness: 3, distance: 110, active: true, description: "This is a random description."},
    {id: 6, name: 'Place - Option 6', plan: 'free', closeness: 2, distance: 25, active: true, description: "This is a random description."},
    {id: 7, name: 'Place - Option 7', plan: 'free', closeness: 2, distance: 55, active: true, description: "This is a random description."},
    {id: 8, name: 'Place - Option 8', plan: 'pay', closeness: 1, distance: 0.5, active: true, description: "This is a random description."},
    {id: 9, name: 'Place - Option 9', plan: 'free', closeness: 2, distance: 35, active: true, description: "This is a random description."},
    {id: 10, name: 'Place - Option 10', plan: 'free', closeness: 2, distance: 46, active: true, description: "This is a random description."},
    {id: 11, name: 'Place - Option 11', plan: 'pay', closeness: 1, distance: 2, active: true, description: "This is a random description."},
    {id: 12, name: 'Place - Option 12', plan: 'free', closeness: 3, distance: 250, active: true, description: "This is a random description."}
  ];
  id = null;
  place: any = {};

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    this.place = this.findPlace();
  }
  findPlace() {
    return this.places.filter( place => place.id == this.id)[0] || null;
  }
}
