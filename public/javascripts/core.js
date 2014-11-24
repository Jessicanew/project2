var addressBookApp = angular.module('addressBookApp', ['ui.router']);

addressBookApp.service('addBookService', ['$http', '$state', function($http, $state){
	
	this.list = function(){
		return $http.get("/api/contacts");
	};
	
	this.add = function(person){	
		return $http.post('/api/contacts', person);
	};
	
	this.get = function(id){
		return $http.get('/api/contacts/'+ id);
	};
	
	this.delete = function(id){
		//return $http.delete('/api/contacts/'+ id, {params: {id: id}});
		return $http.delete('/api/contacts/'+ id);
	};
	
	this.update = function(person){
		return $http.put('/api/contacts/', person);
	};
    
    this.getContacts = this.list().then(function(response){
		return response.data;
	});    
	
}]);