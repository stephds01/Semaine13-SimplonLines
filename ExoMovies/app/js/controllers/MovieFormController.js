/**
 * Created by Stéphanie on 25/03/2016.
 */

myApp.controller('MovieFormController', function($scope, $http, MoviesFactory) {
    $scope.movies = MoviesFactory;
    console.log($scope.movies);


    $scope.removeMovie = function(movie) {
        $scope.movie = movie;
        $scope.movie ={};
    };


    //avecApi rest full
    // $scope.addMovie = function(movie) {
    //
    //     $http.post('http://localhost:3004/movies/', movie)
    //         .then(function(data) {
    //             console.log(data);
    //             $scope.data = $scope.movie;
    //             $scope.movies.$add(movie);
    //             $scope.movie ={};
    //             // $location.path('/movie/edit');
    //             // console.log(data);
    //         })
    //         .catch(function(data, statusText) {
    //             $scope.ServerResponse = data + statusText;
    //         })
    // };
    //Ajout d'un nouveau film et effacement des champ une fois que c'est enregistré Avec firebase
    // $scope.offModal = false;
    // console.log($scope.offModal);

    $scope.addMovie = function(movie) {
        $scope.movies.$add(movie);
        $scope.movie = {};
        $('#myModal').modal('hide')
    };





});
