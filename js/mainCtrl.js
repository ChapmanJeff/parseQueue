var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, parseService) {


	$scope.postData = function() {
		parseService.postTheData($scope.quesInput);
		$scope.quesInput = '';
		$scope.getData();
	}

	$scope.getData = function () {
		parseService.getTheData().then(function(res) {
			console.log(res);
			$scope.questions = res;
				console.log($scope.questions);
				console.log($scope.questions[4].objectId)
		})
	}

	$scope.getData();

	$scope.updateData = function (id) {
		parseService.updateTheData(id).then(function() {
			$scope.getData();
		})
	}

	$scope.deleteData = function (id) {
		parseService.deleteTheData(id).then(function() {
			$scope.getData();
		})

	}


});

