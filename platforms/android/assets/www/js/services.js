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
  { id: 0, name: '提拉', imgUrl: 'img/pets/001.png' },
  { id: 1, name: 'name02', imgUrl: 'img/pets/002.png' },
  { id: 2, name: 'name03', imgUrl: 'img/pets/003.png' },
  { id: 3, name: 'name04', imgUrl: 'img/pets/004.png' },
  { id: 4, name: 'name05', imgUrl: 'img/pets/005.png' },
  { id: 5, name: 'name06', imgUrl: 'img/pets/006.png' },
  { id: 6, name: 'name07', imgUrl: 'img/pets/007.png' },
  { id: 7, name: 'name08', imgUrl: 'img/pets/008.png' },
  { id: 8, name: 'name09', imgUrl: 'img/pets/009.png' },
  { id: 9, name: 'name10', imgUrl: 'img/pets/010.png' },
  { id: 10, name: 'name11', imgUrl: 'img/pets/011.png' },
  { id: 11, name: 'name12', imgUrl: 'img/pets/012.png' },
  { id: 12, name: 'name13', imgUrl: 'img/pets/013.png' },
  { id: 13, name: 'name14', imgUrl: 'img/pets/014.png' },
  { id: 14, name: 'name15', imgUrl: 'img/pets/015.png' },
  { id: 15, name: 'name16', imgUrl: 'img/pets/016.png' }
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
