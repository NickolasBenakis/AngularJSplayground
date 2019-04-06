'use strict';

angular.
    module('demoApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/', {
                    controller: 'SimpleController',
                    templateUrl: './views/view1.html'
                }).
                when('/partial2', {
                    controller: 'SimpleController',
                    templateUrl: './views/view2.html'
                }).
                otherwise({ redirectTo: '/' });
        }
    ]);
// demoApp.config(function ($routeProvider) {
//     $routeProvider
//         .when('/',
//             {
//                 controller: 'SimpleController',
//                 templateUrl: './views/view1.html'

//             })
//         .when('/partial2',
//             {
//                 controller: 'SimpleController',
//                 templateUrl: './views/view2.html'

//             }
//         )
//         .otherwise({ redirectTo: '/' });
// });