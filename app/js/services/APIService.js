angular.module("PalindromeValidator").factory("APIService", function ($http, config) {
	var _isPalindrome = function (form) {
		return $http.post(config.baseUrl + "/validator/palindrome", form);
	};

	return {
		isPalindrome: _isPalindrome
	};
});
