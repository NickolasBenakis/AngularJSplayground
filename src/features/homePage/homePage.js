
angular.module('homePage', []);
angular.module('homePage')
    .controller('homePageCtrl', homePageCtrl)
    .factory('dataFactory', dataFactory)
    .factory('spotifyWebApi', spotifyWebApi)


function homePageCtrl(dataFactory, spotifyWebApi) {
    var vm = this;
    vm.title = "Need Music?";
    vm.description = "NgSpotify to browse new releases and find your favorites songs";
    dataFactory.getOnlineMovies().then(function (res) {
        console.dir(res.data.results[0].title);
        vm.data = res.data.results[0].title;
    });
    spotifyWebApi.getMusic().then(function (res) {
        console.log(res);
    })

}

function dataFactory($http) {

    var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=bc50218d91157b1ba4f142ef7baaa6a0&page=1';
    var dataFactory = {};

    dataFactory.getOnlineMovies = function () {
        return $http.get(url);
    }
    return dataFactory;
}

function spotifyWebApi($http) {
    var spotifyObj = {};
    var req = {
        method: 'GET',
        url: 'https://api.spotify.com/v1/search',
        headers: {
            'Authorization': 'Bearer' + localStorage.getItem('token')
        }
    }
    spotifyObj.getMusic = function () {
        return $http.get(req);
    }
    return spotifyObj;
}




window.onload = function () {
    var queryToken = (window.location.search).split('');
    var index = queryToken.indexOf('=');
    var token = queryToken.splice(index + 1).join('');
    console.log(token);
    localStorage.setItem('token', token);
    console.log(localStorage.getItem('token'));
}