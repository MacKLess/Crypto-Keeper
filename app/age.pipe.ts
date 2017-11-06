import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "sortByAge"
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], ageCheck) {
    var output = null;
    if(ageCheck === 'young') {
      output = input.filter(function(a){
        return a.age < 2;
      });
    } else if (ageCheck === 'old') {
      output = input.filter(function(b){
        return b.age >= 2;
      });
    }
    return output;
  }
}
