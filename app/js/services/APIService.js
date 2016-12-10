angular.module("PalindromeValidator").factory("APIService", function ($http, config) {

	var _isPalindrome = function (text){
		return $http.get(config.baseUrl + "/api/palindrome/" + text);
	};

	return {
		isPalindrome: _isPalindrome
	};
});
