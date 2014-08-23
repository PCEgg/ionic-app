angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})
.factory('Pets', function(){
  // Some Pet data
  var pets = [
  { id: 0, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/001i.png' },
  { id: 1, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/002i.png' },
  { id: 2, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/003i.png' },
  { id: 3, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/004i.png' },
  { id: 4, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/005i.png' },
  { id: 5, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/006i.png' },
  { id: 6, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/007i.png' },
  { id: 7, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/008i.png' },
  { id: 8, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/009i.png' },
  { id: 9, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/010i.png' },
  { id: 10, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/011i.png' },
  { id: 11, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/012i.png' },
  { id: 12, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/013i.png' },
  { id: 13, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/014i.png' },
  { id: 14, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/015i.png' },
  { id: 15, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/016i.png' },
  { id: 16, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/017i.png' },
  { id: 17, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/018i.png' },
  { id: 18, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/019i.png' },
  { id: 19, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/020i.png' },
  { id: 20, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/021i.png' },
  { id: 21, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/022i.png' },
  { id: 22, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/023i.png' },
  { id: 23, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/024i.png' },
  { id: 24, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/025i.png' },
  { id: 25, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/026i.png' },
  { id: 26, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/027i.png' },
  { id: 27, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/028i.png' },
  { id: 28, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/029i.png' },
  { id: 29, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/030i.png' },
  { id: 30, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/031i.png' },
  { id: 31, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/032i.png' },
  { id: 32, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/033i.png' },
  { id: 33, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/034i.png' },
  { id: 34, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/035i.png' },
  { id: 35, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/036i.png' },
  { id: 36, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/037i.png' },
  { id: 37, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/038i.png' },
  { id: 38, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/039i.png' },
  { id: 39, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/040i.png' },
  { id: 40, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/041i.png' },
  { id: 41, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/042i.png' },
  { id: 42, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/043i.png' },
  { id: 43, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/044i.png' },
  { id: 44, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/045i.png' },
  { id: 45, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/046i.png' },
  { id: 46, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/047i.png' },
  { id: 47, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/048i.png' },
  { id: 48, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/049i.png' },
  { id: 49, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/050i.png' },
  { id: 50, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/051i.png' },
  { id: 51, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/052i.png' },
  { id: 52, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/053i.png' },
  { id: 53, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/054i.png' },
  { id: 54, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/055i.png' },
  { id: 55, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/056i.png' },
  { id: 56, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/057i.png' },
  { id: 57, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/058i.png' },
  { id: 58, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/059i.png' },
  { id: 59, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/060i.png' },
  { id: 60, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/061i.png' },
  { id: 61, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/062i.png' },
  { id: 62, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/063i.png' },
  { id: 63, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/064i.png' },
  { id: 64, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/065i.png' },
  { id: 65, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/066i.png' },
  { id: 66, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/067i.png' },
  { id: 67, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/068i.png' },
  { id: 68, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/069i.png' },
  { id: 69, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/070i.png' },
  { id: 70, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/071i.png' },
  { id: 71, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/072i.png' },
  { id: 72, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/073i.png' },
  { id: 73, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/074i.png' },
  { id: 74, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/075i.png' },
  { id: 75, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/076i.png' },
  { id: 76, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/077i.png' },
  { id: 77, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/078i.png' },
  { id: 78, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/079i.png' },
  { id: 79, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/080i.png' },
  { id: 80, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/081i.png' },
  { id: 81, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/082i.png' },
  { id: 82, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/083i.png' },
  { id: 83, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/084i.png' },
  { id: 84, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/085i.png' },
  { id: 85, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/086i.png' },
  { id: 86, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/087i.png' },
  { id: 87, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/088i.png' },
  { id: 88, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/089i.png' },
  { id: 89, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/090i.png' },
  { id: 90, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/091i.png' },
  { id: 91, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/092i.png' },
  { id: 92, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/093i.png' },
  { id: 93, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/094i.png' },
  { id: 94, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/095i.png' },
  { id: 95, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/096i.png' },
  { id: 96, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/097i.png' },
  { id: 97, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/098i.png' },
  { id: 98, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/099i.png' },
  { id: 99, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/100i.png' },
  { id: 100, name: '提拉', type: '', star: '', attr: '', imgUrl: 'img/pets/101i.png' }
  ];

  return {
    all: function(){
      return pets;
    },
    get: function(petId){
      return pets[petId];
    }
  }
});
