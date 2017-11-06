import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  templateUrl: './app/new-animal.component.html'
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(
    species: string,
    name: string,
    age: number,
    sex: string,
    location: string,
    diet: string,
    caretakers: number,
    likes: string,
    dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, sex, location, diet, caretakers, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
