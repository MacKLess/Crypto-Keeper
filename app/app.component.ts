import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  animals: animals[] = [
    new Animal('Fiji Mermaid', 'Doug', 32, 'fish, red corals, warmwater crustacean, waterlogged sailors', 'Northend Pools', 10, 'female', 'mangoes and 80s pop', 'local politics'),
    new Animal('Naga', 'Floyd', 125, 'rodents, figs and clay bowls', 'Desert Flats', 3, 'male', 'The New York Times and flower arrangements', 'purple hats'),
    new Animal('Owl Girl', 'Kyrie', 4, 'rodents, other small birds, and the dreams of new mothers', 'Aerie', 3, 'female', 'Cirque de Soliel', 'Animaniacs and Gerbils'),
    new Animal('Southern Dotted Salamander', 'Tiffany', 1, 'toast, briquettes, blackened marshmallows', 'Glass Caves', 5, 'male', 'smores and middle eastern philosophy', 'water and polyblend materials'),
    new Animal('Lowland Yeti', 'Miranda', 11, 'most sedementary rocks, mountain flowers, blue ice', 'Aerie', 3, 'female', 'Otter Pops and Bunny Slippers', 'Crumbs in her fur' ),
    new Animal('Lop-eared Kelpie', 'Daisy', 250, 'red algae, longrushes, lost children', 'Northend Pools', 8, 'male', 'Flipper Reruns', 'Saved By the Bell and Doritos'),
    new Animal('Cereberus Doodle', 'Fifi', 2, 'brimstone biscuits, bone kibble, corpse ears', 'Glass Caves', 2, 'male', 'electrical frisbees and tummy rubs', 'uncats' ),
    new Animal('Uncat', 'Mr. Cat', 1, 'bone kibble', 'Dakota Plains', 4, 'male', 'Kant and dead things', 'water'),
    new Animal('N-otter', 'Arsenio', 3, 'fish, shellfish, mixed fruits and vegetables', 'Northend Pools', 6, 'male', 'toys, high tea, ascots', 'tracksuits and sideburns'),
    new Animal('Vegetable Lamb', 'Flopsy, Mopsy, and Bertrund' 12, 'grass, clover, and lemonade', 'Dakota Plains', 1, 'hermaphroditic', 'sunsets and ear scritches', 'weedwackers'),
    new Animal('Teacup Kraken', 'Boris', 4, 'fish, shellfish, biscuits', 'Northend Pools', 4, 'male', 'shrimp flavored sugar cubes and silent films', 'rom-coms'),
    new Animal('Closet Creeper', 'Vidocq', 20, 'pocket lint, single socks, fear', 'Suburban Sprawl', 10, 'male', 'laughter and the color pink', 'Thrash Metal and cedar'),
    new Animal('Hedgepixie', 'Thorgood', 55, 'nettles, pine cones, unsupported rumor', 'Dorset Forest', 4, 'female', 'rustling leaves, tennis balls, and midcentury jazz', 'rudeness and sloppy penmanship'),
    new Animal('Pipe Tapper', 'Ted', 3, 'vegetable scraps and flouride-infused water', 'Suburban Sprawl', 8, 'male', ''),
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
