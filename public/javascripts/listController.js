addressBookApp.controller('listController', function($scope, $state, addBookService, $rootScope){
	$scope.title ="Directory";
	
	$scope.loadContacts = addBookService.list().then(function(response){
        $scope.persons = response.data;
        
        /*$rootScope.$on('contactUpdated', function(data) {
            alert("listController  heard it!");
        });*/
	});
	
    $scope.$on('contactUpdated', function(data) {
        alert("listController  heard it!");
        //console.log(data);
        //$scope.loadContacts();
    });
    
    
    $scope.delete = function(id){
		addBookService.delete(id).then(function(response){
			if(response){
				for(var i=0; i < $scope.persons.length; i++){
					if($scope.persons[i].id === id ){
						$scope.persons.splice(i, 1);
					}
				}
			}
		});
	};
    
});