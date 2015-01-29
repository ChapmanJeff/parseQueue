var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {

	this.postTheData = function(message) {
		return $http ({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/question',
			data: {
				Question: message,
				status: "red"
			}
		})
	}

	this.getTheData = function () {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/question'
		}).then(function(res) {
			var result = res.data.results;
			console.log(result)
			dfd.resolve(result);
		})
		return dfd.promise;
	}

	this.updateTheData = function (id) {
		return $http({
			method: 'PUT',
			url: 'https://api.parse.com/1/classes/question/' + id,
			data: {
				status: "yellow"
			}
		})
	}

	this.deleteTheData = function(id) {
		return $http({
			method: 'DELETE',
			url: 'https://api.parse.com/1/classes/question/' + id
		})
	}


});