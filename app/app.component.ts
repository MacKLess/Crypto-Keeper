import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  animals: animals[] = [
    new Animal('Fiji Mermaid', 'Doug', 32, 'omnivore', 'tropical pools', 10, 'female', 'mangoes and 80s pop', 'local politics'),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
    new Animal(''),
  ]

  export class Animal {
    species: string;
    name: string;
    age: number;
    diet: string;
    location: string;
    caretakers: number;
    sex: string;
    likes: string;
    dislikes: string
  }

}
