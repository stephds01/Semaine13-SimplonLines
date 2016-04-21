/**
 * Created by Stéphanie on 25/03/2016.
 */

var myApp = angular.module('myApp',['ngResource','ngRoute', 'firebase']);


myApp.config(function($routeProvider ) {


    // Routes configurations
    $routeProvider
    .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    })
    .when('/movie', {
        templateUrl: 'partials/movie.html',
        controller: 'MovieController'
    })
    .when('/movie/edit/:id', {
        templateUrl: 'partials/editMovie.html',
        controller: 'EditMovieController'
    })
    .otherwise({
        redirectTo: '/home'
    });


});

