

angular.module('demoApp', ['ngRoute'])
    .service('simpleFactory', SimpleFactory)
    .controller('SimpleController', SimpleController)
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/view1', {
                    controller: 'SimpleController',
                    templateUrl: './src/views/view1.html'
                }).
                when('/view2', {
                    controller: 'SimpleController',
                    templateUrl: './src/views/view2.html'
                }).
                otherwise({ redirectTo: '/view1' });
        }
    ]);





function SimpleFactory() {
    var customers = [
        { name: 'John', city: 'Athens' },
        { name: 'Nick', city: 'New York' },
        { name: 'Noelle', city: 'Manhattan' }
    ];
    this.getCustomers = function () {
        return customers;
    };
    return this;

}

function SimpleController($scope, simpleFactory) {
    var vm = this;
    $scope.customers = [];
    $scope.customers = simpleFactory.getCustomers();
    $scope.addCustomer = function () {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        })
    }

}