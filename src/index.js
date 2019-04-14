

angular.module('demoApp', ['ngRoute', 'homePage'])
    .service('SimpleFactory', SimpleFactory)
    .controller('SimpleController', SimpleController)
    .controller('login', login)
    .config(['$routeProvider', config])
    .factory('test', test);





function test($http) {
    return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=bc50218d91157b1ba4f142ef7baaa6a0&page=1')
        .then(function (data) {
            console.log(data);
            return data.results;
        }, function (error) {
            console.log(error);
            return error;
        })
}


function SimpleFactory() {
    var customers = [
        { name: 'John', city: 'Athens' },
        { name: 'Nick', city: 'New York' },
        { name: 'Noelle', city: 'Manhattan' }
    ];
    this.getCustomers = function () {
        return customers;
    };

}

function SimpleController($scope, SimpleFactory, test) {
    var vm = this;
    $scope.customers = [];
    $scope.customers = SimpleFactory.getCustomers();
    $scope.service = test
    $scope.addCustomer = function () {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        })
    }

}

function config($routeProvider) {
    $routeProvider.
        when('/homePage', {
            controller: 'homePageCtrl',
            templateUrl: './src/features/homePage/homePage.html'
        }).
        when('/view2', {
            controller: 'SimpleController',
            templateUrl: './src/features/view2.html'
        }).
        when('/Home', {
            controller: 'homePageCtrl',
            templateUrl: './src/features/homePage/homePage.html'
        }).
        when('/About', {
            controller: 'SimpleController',
            templateUrl: './src/features/About/about.html'
        }).
        when('/loginPage', {
            controller: 'login',
            templateUrl: './src/features/loginPage/login.html'
        }).
        otherwise({ redirectTo: '/loginPage' });
}


function login($scope) {
    var vm = this;
    $scope.getAccess = function () {
        window.location.href = "http://localhost:8888/login";
    }
}

// function getToken(flag) {
//     if (flag) {
//         localStorage.setItem('token', window.location.search);
//     }
// }