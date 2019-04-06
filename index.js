

// function SimpleController($scope){

//     $scope.customers=[
//         {name:'John', city: 'Athens'},
//         {name:'Nick', city: 'New York'},
//         {name:'Noelle', city: 'Manhattan'}
//     ];
// }

// function UpperController($scope) {

//     return $scope.person = "Nikos Benakis";
// }


// function test($scope){
//     console.log(angular);
//     return $scope.angular;
// }


var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.controller('SimpleController', function ($scope) {
    $scope.customers = [
        { name: 'John', city: 'Athens' },
        { name: 'Nick', city: 'New York' },
        { name: 'Noelle', city: 'Manhattan' }
    ];
    $scope.addCustomer = function () {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        })
    }

});
demoApp.config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'SimpleController',
                templateUrl: './views/view1.html'
            }).
            when('/view2', {
                controller: 'SimpleController',
                templateUrl: './views/view2.html'
            }).
            otherwise({ redirectTo: '/' });
    }
]);