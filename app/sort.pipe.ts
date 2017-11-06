import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "sortBySpecies",
  pure: false
})

export class SortPipe implements PipeTransform {
  transform(input: Animal[]) {
    var output = null;
    output = input.sort(function(a,b) {
      if (a.species > b.species) {
        return 1;
      } else if (a.species === b.species){
        return 0;
      } else {
        return -1;
      }
    });
    return output;
  }
}
