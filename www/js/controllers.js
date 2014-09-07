angular.module('starter.controllers', ["firebase"])

.controller('PetsCtrl', function($scope, $location, Pets, $ionicModal, $ionicPopup,$timeout, $ionicLoading) {

  //Get Pets Data
  $scope.pets = Pets.all();
 /* $scope.filterPetStar = [];
  $scope.filterPetName = [];

  $scope.showPetStar = function(pet){
    return pet.star === $scope.filterPetStar.selectedStat;
  };
  */





    // Setup the loader
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  
  // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
  $timeout(function () {
    $ionicLoading.hide();
    $scope.stooges = [{name: 'Moe'}, {name: 'Larry'}, {name: 'Curly'}];
  }, 2000);
  

  //init filter
  $scope.filter = {};
  $scope.petsAttr = [];

  $scope.clickBtn = function(){
    if(this.active){
      return this.active = false;
    }
    this.active = true;
  }


  $scope.getStar = function(){
    return ($scope.pets || []).map(function(p){
      return p.star;
    }).filter(function(p, idx, arr){
        return arr.indexOf(p) === idx;
    });
  };

  $scope.getAttr = function(){
    return ($scope.pets || []).map(function(p){
      return p.attr;
    }).filter(function(p, idx, arr){
        return arr.indexOf(p) === idx;
    });
  };

  $scope.getType = function(){
    return ($scope.pets || []).map(function(p){
      return p.type;
    }).filter(function(p, idx, arr){
        return arr.indexOf(p) === idx;
    });
  };

  $scope.filterBySelected = function(pet){
   return $scope.filter[pet.star] || 
          $scope.filter[pet.type] || 
          $scope.filter[pet.attr] ||
          noFilter($scope.filter);
  };

  function noFilter(filterObj){
    for(var key in filterObj){
      if(filterObj[key]){
        return false;
      }
    }
    return true;
  }


  /* all filter
  $scope.getOptionsFor = function(propName){
    return ($scope.pets || []).map(function(p){
      return p[propName];
    }).filter(function(p, idx, arr){
      return arr.indexOf(p) === idx;
    });
  };

  $scope.filterByProperties = function(pet){
    // Use this snippet for matching with AND
    var matchesAND = true;
    for (var prop in $scope.filter) {
      if(noSubFilter($scope.filter[prop])) continue;
      if(!$scope.filter[prop][pet[prop]]){
        matchesAND = false;
        break;
      }
    }
    return matchesAND;
  };

  function noSubFilter(subFilterObj){
    for (var key in subFilterObj) {
      if (subFilterObj[key]) return false;
    }
    return true;
  }
  */


  function MyCtrl($scope, filter){
    $scope.selectPets = [];

    $scope.filterPets = function (){}
  }




	$scope.openModal = function() {          
          $scope.modalCtrl.show();
        };
    $ionicModal.fromTemplateUrl('modal.html', function(modal) {
          $scope.modalCtrl = modal;
        }, {
          scope: $scope,
          animation: 'slide-in-up',//'slide-left-right', 'slide-in-up', 'slide-right-left'
          focusFirstInput: false
        });   

	//Link up Detail page
	$scope.go = function(path) {
                $location.path(path);
                console.log(path);
             };
    $scope.showPopup = function(){
    };        
})

.controller('ModalCtrl', function($scope) {
        $scope.value1 = true;
        $scope.value2 = 'YES'

        $scope.hideModal = function() {
          $scope.modalCtrl.hide();
        };
       
        $scope.applyModal = function() {
          console.log('modal', $scope);
          $scope.modalCtrl.hide();
          //$scope.modalCtrl.remove();
        };

})

.controller('PetDetailCtrl', function($scope, $stateParams, Pets, $firebase, $ionicNavBarDelegate){
	$scope.pet = Pets.get($stateParams.petId);

	var petNumber = $stateParams.petId;
	console.log(petNumber);

	var loadHowManyTime = 0;
  	
  	var myDataRef = new Firebase("https://burning-fire-6436.firebaseio.com/petMessage/");

  	var sampleCode = myDataRef.child(petNumber);

      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
        	
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          sampleCode.push({name: name, text: text});
          $('#messageInput ,#nameInput').val('');
        }
      });
      sampleCode.on('child_added', function(snapshot) {
      	//alert('oommmgg');
        var message = snapshot.val();
        //displayChatMessage(message.name, message.text);

        $('<div/ class="userName">').text(message.text).prepend($('<em/><br/>').text(message.name+': ')).appendTo($('#messagesDiv'));
        //$( ".userName" ).append( message.name );
        //$( ".userMessage" ).append( message.text );
        //alert(loadHowManyTime);
      });
      function displayChatMessage(name, text) {
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };


     $scope.goBack = function() {
      $ionicNavBarDelegate.back();
    };

})

.controller('NewsCtrl', function($scope, News) {
  //Get News Data
  $scope.news = News.all();
})

.controller('NewDetailCtrl', function($scope, $stateParams, News, $ionicNavBarDelegate) {

  $scope.new = News.get($stateParams.newId);

  $scope.goBack = function() {
      $ionicNavBarDelegate.back();
    };

  $scope.templates =  
    [ { name: 'template1.html', url: 'http://google.com'}  
    , { name: 'template2.html', url: 'template2.html'} ]; 

  $scope.template = $scope.templates[0];    
  
})

.controller('AccountCtrl', function($scope) {
})
