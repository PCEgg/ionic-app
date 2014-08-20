angular.module('starter.controllers', ["firebase"])

.controller('PetsCtrl', function($scope, $location, Pets, $ionicModal, $ionicPopup) {

	//init filter
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
})

.controller('ModalCtrl', function($scope) {
        $scope.hideModal = function() {
          $scope.modalCtrl.hide();
        };
       
        $scope.applyModal = function() {
          console.log('modal', $scope);
          $scope.modalCtrl.hide();
          //$scope.modalCtrl.remove();
        };

      })

.controller('PetDetailCtrl', function($scope, $stateParams, Pets, $firebase){
	$scope.pet = Pets.get($stateParams.petId);

	var loadHowManyTime = 0;
  	
  	var myDataRef = new Firebase("https://burning-fire-6436.firebaseio.com/profiles/");
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          myDataRef.push({name: name, text: text});
          $('#messageInput').val('');
          alert('byebye');
          $route.reload();
        }
      });
      myDataRef.on('child_added', function(snapshot) {
      	//alert('oommmgg');
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        //$('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };

})

.controller('FriendsCtrl', function($scope, Friends, Pets) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends, Pets) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})
