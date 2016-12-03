angular.module('PalindromeValidator').controller("validatorCtrl", function ($scope, $http, $location, APIService) {
	
	$scope.palindromeSubmit = function(word){
		APIService.isPalindrome(word).then(function(data) {
			if(data.status == 200){
					$scope.message = "It's a Palindrome :)";
			}
		}, function(data) {
			if(data.status == 400){
					$scope.message = "Sorry, it's not a Palindrome :(";
			}
		});
	};

});
