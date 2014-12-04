addressBookApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider.
		state('list', {
			url: '/',
			templateUrl: '/partials/list2.html',
			controller: 'listController'
		}).
		state('add', {
			url: '/addContacts/:id',
			templateUrl: '/partials/addContactForm.html',
			controller: 'addController'
		}).
		state('edit', {
			url: '/editContacts/:id',
			templateUrl: '/partials/editContactForm.html',
			controller: 'editController'
		});
});