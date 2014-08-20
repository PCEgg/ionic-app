angular.module('starter.firebase', ["firebase"])

.factory('FirebaseConnect', ['$firebase', function($scope, $firebase){
  alert('loaded');
  $scope.myDataRef = new Firebase("https://burning-fire-6436.firebaseio.com/profiles/");
  console.log($scope.myDataRef);
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          $scope.myDataRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
      $scope.myDataRef.on('child_added', function(snapshot) {
        $scope.message = snapshot.val();
        displayChatMessage($scope.message.name, $scope.message.text);
      });
      function displayChatMessage(name, text) {
          alert('hihi');
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        //$('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
    }
]);