addressBookApp.controller('editController',['$scope','$stateParams','addBookService','$rootScope', function($scope, $stateParams, addBookService, $rootScope){
    
/*
addressBookApp.controller('editController',['$scope','$stateParams','addBookService', function($scope, $stateParams, addBookService){
*/
    
    $scope.title ="Edit Contact";
	var id = $stateParams.id;
    
	$scope.get = function(){
		addBookService.get(id).then(function(response){            
			$scope.person = response.data;
		});
	};
    
	$scope.update = function(){   
        var person = {lastName: $scope.person.lastName, firstName: $scope.person.firstName, email: $scope.person.email, id: $scope.person.id};    
        addBookService.update(person).then(function(response){
            alert("Updated successfully!");
            /*$rootScope.$broadcast('contactUpdated');   
            alert("broadcasted!");*/
		});
	};
        
    
        
     /*   $scope.$apply(function(){  
        alert("Start update()");
        var person = {lastName: $scope.person.lastName, firstName: $scope.person.firstName, email: $scope.person.email};        
        addBookService.update(person).then(function(response){
            alert("Updated successfully!"+ response +response.data);
            //$scope.$digest;
		});
	});        */
        
    

}]);