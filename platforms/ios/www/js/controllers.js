angular.module('starter.controllers', [])

.controller('PetsCtrl', function($scope, $location, Pets) {
	$scope.pets = Pets.all();
	$scope.go = function(path) {
                  $location.path(path);
                  console.log(path);
             };
})

.controller('PetDetailCtrl', function($scope, $stateParams, Pets){
	$scope.pet = Pets.get($stateParams.petId);
})

.controller('FriendsCtrl', function($scope, Friends, Pets) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends, Pets) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
