import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: 'app/animal-list.component.html'
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "all";
  selectedAnimal = null;

  viewAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedViewing() {
    this.selectedAnimal = null;
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    console.log(animalToEdit.name);
    this.clickSender.emit(animalToEdit);
  }

}
