var CONTEXT_PATH = "http://localhost/"

var urlClientLogin = CONTEXT_PATH + "/api/client/login";
var urlFindByUsername = CONTEXT_PATH + "/api/client/findByUsername";
var username;


var app = angular.module('loginApp', []);
var clientRequestId = 0;

app.controller('loginCtrl', function($http, $scope) {
	
	$scope.loginForm = {};	
	
	$scope.submitForm = function() {	
		
		var client = {'username': $scope.username, 'password': $scope.password };
		
		var  pwdLen = $scope.password.length;
		
		if(pwdLen >7){
			$http.post(urlClientLogin, client ).success(function (response) {
				console.log("success");		
			});		
		}else{
			alert("Password must be greater than 7 characters");
		}
		
		if(test >10){
					
		}else{
			
		}		
	}
	
	
	$http.get(urlFindByUsername , {params:{ username: username}}).success(function (response) {
		$scope.data = response;
		console.log("username = " + $scope.data.username);		
	});
	
});