


angular.module('homePage', [])
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/homePage', {
                    templateUrl: './src/features/homePage/homePage.html',
                    controller: 'homePageCtrl'
                })
        }
    ]).controller('homePageCtrl', homePageCtrl)
    .factory('hello', ['serviceDemo']);


function homePageCtrl($scope) {

    return $scope;
}