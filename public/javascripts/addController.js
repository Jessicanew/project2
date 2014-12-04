addressBookApp.controller('addController', function($scope, $state, addBookService) {
	$scope.title ="Add Contact";	
    
	$scope.add = function() {
        var person = {lastName: $scope.person.lastName, firstName: $scope.person.firstName, email: $scope.person.email};            
        addBookService.add(person).then(function(response) {
            $scope.person = {
                lastName: "",
                firstName: "",
                email: ""
            };
		});        
	};
    
});