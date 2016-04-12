/**
 * Created by Stéphanie on 25/03/2016.
 */

myApp.controller('MovieFormController', function($scope, $http) {

    $scope.removeMovie = function(movie) {
        $scope.movie = movie;
        $scope.movie ={};
    };

    $scope.addMovie = function(movie) {

        $http.post('http://localhost:3004/movies/', movie)
            .then(function(data) {
                console.log(data);
                $scope.data = $scope.movie;
                $scope.movies.push(movie);
                $scope.movie ={};
                // $location.path('/movie/edit');
                // console.log(data);
            })
            .catch(function(data, statusText) {
                $scope.ServerResponse = data + statusText;
            })
    };

});
