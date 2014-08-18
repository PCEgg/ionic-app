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
  { id: 15, name: 'name16', imgUrl: 'img/pets/016.png' },
  { id: 16, name: 'name17', imgUrl: 'img/pets/017.png' },
  { id: 17, name: 'name18', imgUrl: 'img/pets/018.png' },
  { id: 18, name: 'name19', imgUrl: 'img/pets/019.png' },
  { id: 19, name: 'name20', imgUrl: 'img/pets/020.png' },
  { id: 20, name: 'name21', imgUrl: 'img/pets/021.png' },
  { id: 21, name: 'name22', imgUrl: 'img/pets/022.png' },
  { id: 22, name: 'name23', imgUrl: 'img/pets/023.png' },
  { id: 23, name: 'name24', imgUrl: 'img/pets/024.png' },
  { id: 24, name: 'name25', imgUrl: 'img/pets/025.png' },
  { id: 25, name: 'name26', imgUrl: 'img/pets/026.png' },
  { id: 26, name: 'name27', imgUrl: 'img/pets/027.png' },
  { id: 27, name: 'name28', imgUrl: 'img/pets/028.png' },
  { id: 28, name: 'name29', imgUrl: 'img/pets/029.png' },
  { id: 29, name: 'name30', imgUrl: 'img/pets/030.png' },
  { id: 30, name: 'name31', imgUrl: 'img/pets/031.png' },
  { id: 31, name: 'name32', imgUrl: 'img/pets/032.png' },
  { id: 32, name: 'name33', imgUrl: 'img/pets/033.png' },
  { id: 33, name: 'name34', imgUrl: 'img/pets/034.png' },
  { id: 34, name: 'name35', imgUrl: 'img/pets/035.png' },
  { id: 35, name: 'name36', imgUrl: 'img/pets/036.png' },
  { id: 36, name: 'name37', imgUrl: 'img/pets/037.png' },
  { id: 37, name: 'name38', imgUrl: 'img/pets/038.png' },
  { id: 38, name: 'name39', imgUrl: 'img/pets/039.png' },
  { id: 39, name: 'name40', imgUrl: 'img/pets/040.png' },
  { id: 40, name: 'name41', imgUrl: 'img/pets/041.png' },
  { id: 41, name: 'name42', imgUrl: 'img/pets/042.png' },
  { id: 42, name: 'name43', imgUrl: 'img/pets/043.png' },
  { id: 43, name: 'name44', imgUrl: 'img/pets/044.png' },
  { id: 44, name: 'name45', imgUrl: 'img/pets/045.png' },
  { id: 44, name: 'name46', imgUrl: 'img/pets/046.png' },
  { id: 45, name: 'name47', imgUrl: 'img/pets/047.png' },
  { id: 46, name: 'name48', imgUrl: 'img/pets/048.png' },
  { id: 47, name: 'name49', imgUrl: 'img/pets/049.png' },
  { id: 48, name: 'name50', imgUrl: 'img/pets/050.png' },
  { id: 49, name: 'name51', imgUrl: 'img/pets/051.png' },
  { id: 50, name: 'name52', imgUrl: 'img/pets/052.png' },
  { id: 51, name: 'name53', imgUrl: 'img/pets/053.png' },
  { id: 52, name: 'name54', imgUrl: 'img/pets/054.png' },
  { id: 53, name: 'name55', imgUrl: 'img/pets/055.png' }
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
