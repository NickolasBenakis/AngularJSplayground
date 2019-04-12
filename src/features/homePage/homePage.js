


angular.module('homePage', []);
angular.module('homePage')
    .controller('homePageCtrl', homePageCtrl)
    .factory('dataFactory', dataFactory);


function homePageCtrl(dataFactory) {
    var vm = this;
    vm.title = "Need Music?";
    
    dataFactory.getOnlineMovies().then(function (res) {
        console.dir(res.data.results[0].title);
        vm.data = res.data.results[0].title;
    });
}

function dataFactory($http) {

    var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=bc50218d91157b1ba4f142ef7baaa6a0&page=1';
    var dataFactory = {};

    dataFactory.getOnlineMovies = function () {
        return $http.get(url);
    }
    return dataFactory;
}