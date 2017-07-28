angular.module('app')
.controller('ReminderController', ['$scope', '$state', 'Reminder', function($scope,
    $state, Reminder) {
  $scope.reminders = [];
  function getReminders() {
    Reminder
      .find()
      .$promise
      .then(function(results) {
        $scope.reminders = results;
      });
  }
  getReminders();

  $scope.addReminder = function() {
    Reminder
      .create($scope.newReminder)
      .$promise
      .then(function(reminder) {
        $scope.newReminder = '';
        $scope.reminderForm.title.$setPristine();
        $scope.reminderForm.description.$setPristine();
        $('.focus').focus();
        getReminders();
      });
  };

  $scope.removeReminders = function(item) {
    Reminder
      .deleteById(item)
      .$promise
      .then(function() {
        getReminders();
      });
  };

  $scope.updateReminder = function(item){
    Reminder
      .upsert(item)
      .$promise
      .then(function(){
        getReminders();
      });
  }
}]);
