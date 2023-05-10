const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let parkJ
  let dinosaur1
  let dinosaur2
  let dinosaur3
  let dinosaur4
  let dinosaur5

  beforeEach(function () {
    parkJ = new Park('Nemo and Dinosaurs', 15);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur4 = new Dinosaur('t-rex', 'carnivore', 40);
    dinosaur5 = new Dinosaur('t-rex', 'carnivore', 30);
    dinosaur2 = new Dinosaur('Velociraptor', 'carnivore', 30);
    dinosaur3 = new Dinosaur('Triceratops', 'herbivore', 25);
    
  })

  it('should have a name', function(){
    const actual = parkJ.name
    assert.strictEqual(actual, 'Nemo and Dinosaurs')
  });

  it('should have a ticket price', function(){
    const actual = parkJ.ticketPrice
    assert.strictEqual(actual, 15)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = parkJ.collectionOfDinosaurs
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    parkJ.addDinosaur(dinosaur1)
    const actual = parkJ.numberOfDinosaurs()
    assert.deepStrictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    parkJ.addDinosaur(dinosaur1)
    parkJ.addDinosaur(dinosaur2)
    parkJ.addDinosaur(dinosaur3)
    parkJ.removeDinosaur(dinosaur2)
    const actual = parkJ.numberOfDinosaurs()
    assert.strictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    parkJ.addDinosaur(dinosaur1)
    parkJ.addDinosaur(dinosaur2)
    parkJ.addDinosaur(dinosaur3)
    const actual = parkJ.popularDinosaur()
    assert.deepStrictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    parkJ.addDinosaur(dinosaur1)
    parkJ.addDinosaur(dinosaur2)
    parkJ.addDinosaur(dinosaur3)
    parkJ.addDinosaur(dinosaur4)
    parkJ.addDinosaur(dinosaur5)
    const actual = parkJ.sameSpeciesDinosaurs('t-rex')
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur4, dinosaur5])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    parkJ.addDinosaur(dinosaur1)
    parkJ.addDinosaur(dinosaur2)
    parkJ.addDinosaur(dinosaur3)
    const actual = parkJ.calculateVisitors()
    assert.strictEqual(actual, 105)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    parkJ.addDinosaur(dinosaur1)
    parkJ.addDinosaur(dinosaur2)
    parkJ.addDinosaur(dinosaur3)
    const actual = parkJ.anualVisitors()
    assert.strictEqual(actual, 38325)
  });

  it('should be able to calculate total revenue for one year', function(){
    parkJ.addDinosaur(dinosaur1)
    parkJ.addDinosaur(dinosaur2)
    parkJ.addDinosaur(dinosaur3)
    const actual = parkJ.anualRevenue()
    assert.strictEqual(actual, 574875)
  });

  it('should  be able to remove all dinosaurs of one kind', function(){
    parkJ.addDinosaur(dinosaur1)
    parkJ.addDinosaur(dinosaur2)
    parkJ.addDinosaur(dinosaur3)
    parkJ.addDinosaur(dinosaur4)
    parkJ.addDinosaur(dinosaur5)
    parkJ.removeDinosaursBySpecies('t-rex')
    const actual = parkJ.collectionOfDinosaurs
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3])
  })
  it('should  be able to display the number of dinosaurs in the park based on the diet', function(){
    parkJ.addDinosaur(dinosaur1)
    parkJ.addDinosaur(dinosaur2)
    parkJ.addDinosaur(dinosaur3)
    parkJ.addDinosaur(dinosaur4)
    parkJ.addDinosaur(dinosaur5)
    const actual = parkJ.dinosaursPerDiet()
    assert.deepStrictEqual(actual, {'carnivore': 4, 'herbivore': 1})
  })




});
