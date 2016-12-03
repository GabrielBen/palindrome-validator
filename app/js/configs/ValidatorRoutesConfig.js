angular.module("PalindromeValidator").config(function ($routeProvider){
	$routeProvider.when("/palindrome", {
		templateUrl: "view/palindrome.html",
		controller: "validatorCtrl"
	});

	$routeProvider.otherwise({redirectTo: "/palindrome"});

});
