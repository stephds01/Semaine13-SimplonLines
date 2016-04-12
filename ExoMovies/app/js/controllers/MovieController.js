/**
 * Created by Stéphanie on 25/03/2016.
 */


//Methode avec $http ds Controller
// myApp.controller('MovieController',['$scope', '$http', function($scope, $http ) {
//
//    // //Je créer un obj 'Movies'
//    // $scope.movies = {};
//
//    //je fais une requete GET et je remplis mon obj Movies
//    $http.get("http://localhost:3004/movies")
//        .success(function(data) {
//            $scope.movies = data;
//        })
//        .error(function(data, status) {
//            console.log(data + status);
//        });
//
//
//
//
//    $scope.deleteMovie = function(index) {
//        $http.delete("http://localhost:3004/movies/" + $scope.movies[index].id)
//            .then(function(){
//                    // console.log('BRAVOOO ' +  data);
//                    $scope.movies.splice(index, 1);
//            })
//            .catch(function(response){
//                console.log('GRRRR ' +  response)
//            });
//
//    };
//
// }]);


//Method avec le $http déplacer ds une factory (pour la lisibilité du code)
// myApp.controller('MovieController',function($scope, MoviesFactory ) {
//
//     //fonction GET
//     MoviesFactory.getData()
//         .then(function(data){
//             //Si ca marche je mets le tableau ds le scope
//             $scope.movies = data;
//         })
//         .catch(function(message) {
//             console.log(message)
//         });
//
//
//     //fonction DELETE
//     $scope.deleteMovie = function(movie) {
//         //J'efface grace a la factory
//         MoviesFactory.deleteData(movie)
//             .then(function(data) {
//                 console.log(data);
//                 //Si tout se passe bien, je raffraichis la page
//                 MoviesFactory.getData()
//                     .then(function(data){
//                         $scope.movies = data;
//
//                     })
//                     .catch(function(message) {
//                         console.log(message)
//                     });
//             })
//             .catch(function(message) {
//                 console.log(message)
//             })
//
//     };
// });

//Méthode avec controller en utisant $ressource

myApp.controller('MovieController', function($scope, MoviesFactory, $location) {
    //Gère l'affichage TOUS LES FILMS de la page avec
    $scope.movies = MoviesFactory.query();


    //Gère la supression du film en cliquant sur poubelle
    $scope.deleteMovie = function(movie) {
        console.log(movie);

        MoviesFactory.delete({movie:movie.id},function(){
            console.log('id est : ' + movie.id);

            //Je supprime les données ds la vue
            $scope.movies = MoviesFactory.query();
        })
    };


    //Gère l'edition du film en cliquant sur ardoise/crayon
    $scope.goMovie = function(path) {
        console.log(path);
        $location.path(path);
        // alert('lola');
    };

    //Qd tu cliques sur le btn, tu crées une variable de orderByCategorie, tu lui affectes arguments du tableau qu'il doit trier puis tu va ds HTML et ds le ng-repeat tu met orderBy: orderByCategorie (c'est la variable crée) : orderByReverse (si tu veux inverser a chaque click
    $scope.clickFilterCategory = function() {
      $scope.orderByReverse = !$scope.orderByReverse;  
      $scope.orderByCategorie = 'category';  
        
    };

    //Filtrer par année
    $scope.clickFilterYear = function() {
        $scope.orderByYear = 'lastViewDate';
        $scope.orderByReverse = !$scope.orderByReverse;
    };




});