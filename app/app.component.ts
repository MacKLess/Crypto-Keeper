import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  // selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Fiji Mermaid', 'Doug', 32, 'female', 'Northend Pools', 'fish, red corals, warmwater crustacean, waterlogged sailors', 10, 'mangoes and 80s pop', 'local politics'),
    new Animal('Naga', 'Floyd', 125, 'male', 'Desert Flats', 'rodents, figs and clay bowls', 3, 'The New York Times and flower arrangements', 'purple hats'),
    new Animal('Owl Girl', 'Kyrie', 4, 'female', 'Aerie', 'rodents, other small birds, and the dreams of new mothers', 3, 'Cirque de Soliel', 'Animaniacs and Gerbils'),
    new Animal('Southern Dotted Salamander', 'Tiffany', 1, 'male', 'Glass Caves', 'toast, briquettes, blackened marshmallows', 5, 'smores and middle eastern philosophy', 'water and polyblend materials'),
    new Animal('Lowland Yeti', 'Miranda', 11, 'female', 'Aerie', 'most sedementary rocks, mountain flowers, blue ice', 3, 'Otter Pops and Bunny Slippers', 'Crumbs in her fur' ),
    new Animal('Lop-eared Kelpie', 'Daisy', 250, 'male', 'Northend Pools', 'red algae, longrushes, lost children', 8, 'Flipper Reruns', 'Saved By the Bell and Doritos'),
    new Animal('Cereberus Doodle', 'Fifi', 2, 'male', 'Glass Caves', 'brimstone biscuits, bone kibble, corpse ears', 2, 'electrical frisbees and tummy rubs', 'uncats' ),
    new Animal('Uncat', 'Mr. Cat', 1, 'male', 'Dakota Plains', 'bone kibble', 4, 'Kant and dead things', 'water'),
    new Animal('N-otter', 'Arsenio', 3, 'male', 'Northend Pools', 'fish, shellfish, mixed fruits and vegetables', 6, 'toys, high tea, ascots', 'tracksuits and sideburns'),
    new Animal('Vegetable Lamb', 'Flopsy, Mopsy, and Bertrund', 12, 'hermaphroditic', 'Dorset Forest', 'grass, clover, and lemonade', 1, 'sunsets and ear scritches', 'weedwackers'),
    new Animal('Teacup Kraken', 'Boris', 4,  'male', 'Northend Pools', 'fish, shellfish, biscuits', 4, 'shrimp flavored sugar cubes and silent films', 'rom-coms'),
    new Animal('Closet Creeper', 'Vidocq', 20, 'male', 'Suburban Sprawl', 'pocket lint, single socks, fear', 10, 'laughter and the color pink', 'Thrash Metal and cedar'),
    new Animal('Hedgepixie', 'Thorgood', 55, 'female', 'Dorset Forest', 'nettles, pine cones, unsupported rumor', 4, 'rustling leaves, tennis balls, and midcentury jazz', 'rudeness and sloppy penmanship'),
    new Animal('Pipe Tapper', 'Ted', 3, 'male', 'Suburban Sprawl', 'vegetable scraps and flouride-infused water', 8, 'well-maintained plumbing and percussion instruments', 'bleach and acidic fruit'),
    new Animal('Mongolian Death Worm', 'Brunhilda', 1000, 'female', 'Desert Flats', 'camels and parasitic plants local to the Gobi desert', 12, 'soap operas and dried figs', 'high pitched noises and junk mail' ),
    new Animal('Macedonian Harpy', 'Ljubica', 44, 'female', 'Aerie', 'stone fuits, fish, and small rodents', 7, 'Lipsmackers lipbalm, climbing hooks, and rope swings', 'Cayenne pepper, cold temperatures, and sailors'),
    new Animal('Macedonian Harpy', 'Snejana', 44, 'female', 'Aerie', 'stone fuits, fish, and small rodents', 7, 'Lipsmackers lipbalm, Tiger Beat magazines, and rope swings', 'Garlic salt, cold temperatures, and sailors'),
    new Animal('Dobhar-chu (Water-hound)', 'Rex', 2, 'male', 'Northend Pools', 'fish, kelp, small amphibians', 6, 'tennis balls and fish heads', 'heat, balloons, and spam'),
  ].sort(function(a,b){
    if (a.species > b.species) {
      return 1;
    } else if (a.species === b.species){
      return 0;
    } else {
      return -1;
    }
  });

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
