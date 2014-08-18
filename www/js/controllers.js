angular.module('starter.controllers', [])

.controller('PetsCtrl', function($scope,  $location, Pets, $ionicModal, $ionicPopup) {
	$scope.petsFilter = { "msg" : "" };

	$scope.openModal = function() {          
          $scope.modalCtrl.show();
        };
    $ionicModal.fromTemplateUrl('modal.html', function(modal) {
          $scope.modalCtrl = modal;
        }, {
          scope: $scope,
          animation: 'slide-in-left',//'slide-left-right', 'slide-in-up', 'slide-right-left'
          focusFirstInput: true
        });   

	//Get Pets Data
	$scope.pets = Pets.all();
	//Link up Detail page
	$scope.go = function(path) {
                  $location.path(path);
                  console.log(path);
             };
    $scope.showPopup = function(){
    };        
}).controller('ModalCtrl', function($scope) {
        $scope.hideModal = function() {
          $scope.modalCtrl.hide();
        };
       
        $scope.applyModal = function() {
          console.log('modal', $scope);
          $scope.modalCtrl.hide();
          //$scope.modalCtrl.remove();
        };

      })


.filter('petsFilter', function(){
	return function(input){
		return input;
	}
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
