﻿'use strict'

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
      templateUrl: 'app/phone-list/phone-list.template.html',
      controller: ['Phone',
          function PhoneListController(Phone) {
              this.orderProp = 'age';
              this.phones = Phone.query();
          }
      ]
  });