


angular.module('homePage', []);
angular.module('homePage')
    .controller('homePageCtrl', homePageCtrl)
    .factory('dataFactory', dataFactory)


function homePageCtrl(dataFactory) {
    var vm = this;
    vm.title = "Need Music?";
    vm.description = "NgSpotify to browse new releases and find your favorites songs";
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


// function auth() {
//     var token = 'AQDvu8lknBsemBpSFO5CtnzXYpqkzxdig0IcEXgmqC6HLksDjVDviWzX7mqXuxmQY5z-0oNQK2NOJ7ht_lLNCih43n1GcIx2AcYQzV4n1rI2OupmpqOnm_pdaozhQyH_3kwvxUDbb6-zGLNI0biBkSCW3z_ZnIctaCpZmVS2ELz3_nJC6o21m_Ddukx8DMS42XNmg4LoX6NjRgokziu5Gw0jyG8FEVZNxHS6VeqJ4JDE1tRFij-U';
// }