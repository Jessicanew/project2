addressBookApp.controller('listController', function($scope, $state, addBookService, $rootScope){
	$scope.title ="Directory";
	
	$scope.loadContacts = addBookService.list().then(function(response){
        $scope.persons = response.data;
	});
    
    $scope.delete = function(id){
		if(confirm("Are you sure to delete it?")){
            addBookService.delete(id).then(function(response){
                if(response){
                    for(var i=0; i < $scope.persons.length; i++){
                        if($scope.persons[i].id === id ){
                            $scope.persons.splice(i, 1);
                        }
                    }
                }
            });
        }
	};    
});