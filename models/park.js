const Dinosaur = require("./dinosaur");

const Park = function(name, ticketPrice,){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = []
    this.numberOfDinosaursPerDiet = {'carnivore': 4, 'herbivore': 1}

};


Park.prototype.addDinosaur = function(dinosaur){
    this.collectionOfDinosaurs.push(dinosaur)
}
Park.prototype.removeDinosaur = function(dinosaur){
    const dinosaurIndex = this.collectionOfDinosaurs.indexOf(dinosaur)
    this.collectionOfDinosaurs.splice(dinosaurIndex, 1)
}
Park.prototype.numberOfDinosaurs = function(){
    return this.collectionOfDinosaurs.length
}
Park.prototype.popularDinosaur = function(){
    let dinosaur = null
    let attraction = 0
    for(let i = 0; i < this.collectionOfDinosaurs.length; i++){
        if(this.collectionOfDinosaurs[i].guestsAttractedPerDay > attraction){
            attraction = this.collectionOfDinosaurs[i].guestsAttractedPerDay 
            dinosaur = this.collectionOfDinosaurs[i]
        };
    };
    return dinosaur
}

Park.prototype.sameSpeciesDinosaurs = function(species){
    let dinosaur = []
    for(let i = 0; i < this.collectionOfDinosaurs.length; i++){
        if(this.collectionOfDinosaurs[i].species === species){
            dinosaur.push(this.collectionOfDinosaurs[i])
        };
    };
    return dinosaur
}

Park.prototype.calculateVisitors = function(){
    let attraction = 0
    for(let i = 0; i < this.collectionOfDinosaurs.length; i++){
        attraction += this.collectionOfDinosaurs[i].guestsAttractedPerDay 
       
    };
    return attraction
}
Park.prototype.anualVisitors = function(){
    let attraction = 0
    for(let i = 0; i < this.collectionOfDinosaurs.length; i++){
        attraction += this.collectionOfDinosaurs[i].guestsAttractedPerDay 
       
    };
    return attraction * 365
}
Park.prototype.anualRevenue = function(){
    let attraction = 0
    for(let i = 0; i < this.collectionOfDinosaurs.length; i++){
        attraction += this.collectionOfDinosaurs[i].guestsAttractedPerDay 
       
    };
    return attraction * 365 * this.ticketPrice
}

Park.prototype.removeDinosaursBySpecies = function(species){
    for(let i = this.collectionOfDinosaurs.length - 1; i >= 0; i--){        
        if(this.collectionOfDinosaurs[i].species === species){
            this.collectionOfDinosaurs.splice(i, 1);
        };
    };
}

// Park.prototype.dinosaursPerDiet = function(){
//     for(let i = 0; i < this.collectionOfDinosaurs.length; i++){
//         console.log("!!!!!!!!!!!!!!!!!!!!!!!!!")
//         if(this.collectionOfDinosaurs[i].diet in Object.keys(this.dinosaursPerDiet)){
//             const key = `${this.collectionOfDinosaurs[i].diet}`
//             let value = this.numberOfDinosaursPerDiet[key]
//             value += value;
//             this.numberOfDinosaursPerDiet[key] = value
//         }else{
//             const key = `${this.collectionOfDinosaurs[i].diet}`
//             this.numberOfDinosaursPerDiet[key] = 1
//         };
//     };
// }
Park.prototype.dinosaursPerDiet = function(){
    const dinosaursPerDiet = {}

    for(let i = 0; i < this.collectionOfDinosaurs.length; i++){
        if(this.collectionOfDinosaurs[i].diet in dinosaursPerDiet){
            let value = dinosaursPerDiet[this.collectionOfDinosaurs[i].diet]
            value += 1;
            dinosaursPerDiet[this.collectionOfDinosaurs[i].diet] = value
        }else{
            dinosaursPerDiet[this.collectionOfDinosaurs[i].diet] = 1
        };
    };
    return dinosaursPerDiet
}




module.exports = Park