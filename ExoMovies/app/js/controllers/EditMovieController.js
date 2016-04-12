/**
 * Created by Stéphanie on 31/03/2016.
 */

//Method avec $http
// myApp.controller('EditMovieController',function($scope, $routeParams, $http, $location) {
//
//     var id = $routeParams.id;
//     $scope.id = id;
//     console.log('id n° ' + $scope.id);
//
//     // $scope.movie = movie;
//
//     $http.get('http://localhost:3004/movies/' + id)
//         .then(function (data) {
//             $scope.data = data.data;
//             // console.log($scope.data);
//
//             $scope.movie = $scope.data;
//
//             //affiche
//             console.log($scope.movie);
//         })
//         .catch(function (data, status) {
//             console.log('Error ' + data + status)
//         });
//
//
//     $scope.deleteEdit = function () {
//         $scope.movie = {};
//     };
//
//
//     $scope.editMovie = function(movie){
//         $scope.movie = movie;
//         // //Je récupere le movie du formulaire
//         console.log($scope.movie);
//
//         $http.put('http://localhost:3004/movies/' + movie.id, movie)
//             .success(function (data) {
//                  $scope.data = $scope.movie;
//                 $location.path('/movie');
//                 console.log(data);
//
//             })
//             .error(function(data, statusText) {
//                 $scope.ServerResponse = data + statusText;
//             });
//
//
//
//
//         alert('modifier');
//     }
//
// });

//Method avec Resources
myApp.controller('EditMovieController',function($scope, $routeParams, MoviesFactory) {

    //Je mets dans le scope les parametres de la route
    $scope.id = $routeParams.id;
    console.log('index n° ' + $scope.id);


    //Je crée un requete resource get pour aller chercher 1 seul film avec id de la route
    $scope.oneMovie = MoviesFactory.get({movie: $scope.id});

    $scope.oneMovie.$promise.then(function(data) {
        $scope.data = data;
        console.log($scope.data);
        //Je remplace les champs du form par le text du movie selectionné
        $scope.movie = $scope.data;
    });


    //Supprimer le text des champs
    $scope.deleteEdit = function(movie) {
        $scope.movie = movie;
        $scope.movie = {};
    };

    //Mettre à jour les modification duformulaire et enregistré ds movies.json
    $scope.editMovie = function (movie) {
        $scope.movie = movie;
        console.log($scope.movie);
        console.log($scope.id);
        //Je mets a jour la ressource MovieFactory avec l'objet $scope.id($paramsRoute) & j'envoie en parametre l'argument (movie)
        MoviesFactory.update({movie: $scope.id}, movie);
    }


});











