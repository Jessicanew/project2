addressBookApp.controller('editController',['$scope','$stateParams','addBookService', function($scope, $stateParams, addBookService){
    
    $scope.title ="Edit Contact";
	var id = $stateParams.id;
    
	$scope.get = function(){
		addBookService.get(id).then(function(response){            
			$scope.person = response.data;
		});
	};
    
	$scope.update = function(){   
        var person = {lastName: $scope.person.lastName, firstName: $scope.person.firstName, email: $scope.person.email, id: $scope.person.id};    
        var contact = {
            contact: person,
            id: $scope.person.id
        };
        addBookService.update(contact).then(function(response){
		});
	};

}]);