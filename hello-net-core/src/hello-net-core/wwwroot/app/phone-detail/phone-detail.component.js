'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
        templateUrl: 'app/phone-detail/phone-detail.template.html',
        controller: ['$routeParams', '$http',
          function PhoneDetailController($routeParams, $http) {
              var self = this;

              $http.get('app/phones/' + $routeParams.phoneId + '.json').then(function (response) {
                  self.phone = response.data;
              })
             }
        ]
      });