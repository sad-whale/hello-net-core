'use strict'

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
      templateUrl: 'app/phone-list/phone-list.template.html',
      controller: ['$http',
          function PhoneListController($http) {
              var self = this;
              self.orderProp = 'age';

              $http.get('app/phones/phones.json').then(function (response) {
                  self.phones = response.data;
              });
          }
      ]
  });