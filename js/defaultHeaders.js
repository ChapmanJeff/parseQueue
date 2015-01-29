    var app = angular.module('parseQ');

    app.factory('httpRequestInterceptor', function () {
      return {
        request: function (config) {
          config.headers = {'X-Parse-Application-Id': 'XSDph48SKfCyQLXfpD0SQJtWnt04Rh4prAyoxqdp', 'X-Parse-REST-API-Key': 'B2rv56Inxkey0uPZcAu4alpzTsSCQ35ERYy9KeXn'}
          return config;
        }
      };
    });