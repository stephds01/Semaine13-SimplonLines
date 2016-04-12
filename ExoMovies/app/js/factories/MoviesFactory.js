/**
 * Created by Stéphanie on 05/04/2016.
 */


// Methode avec un seul $http ds la factory qui transmets a son controller
// myApp.factory('MoviesFactory', function($http, $q) {
//    
//    
//     // function Update
//     function getData() {
//         return $http({
//             method:'GET',
//             url: 'http://localhost:3004/movies'
//         }).then(function(data){
//             var movies= data.data;
//             console.log(movies);
//             console.log('SUCCCEESSSS');
//             return movies;
//         }).catch(function(response) {
//             return $q.reject('Désolé, erreur '   + response.status);
//         })
//     }
//
//
//     // function Delete
//     function deleteData (movie) {
//         return $http({
//             method: 'delete',
//             url: 'http://localhost:3004/movies/' + movie.id
//         })
//             .then(function(data){
//             console.log(data);
//         })
//             .catch(function(response) {
//                 return $q.reject('Désolé, erreur '   + response.status);
//             });
//
//
//     }
//
//
//
//     return{
//         getData:getData,
//         deleteData:deleteData
//     }
// });

myApp.factory('MoviesFactory', function($resource){

    return $resource('http://localhost:3004/movies/:movie', {movie:"@movie"}, {
        update:{
            method:'PUT'
        }

    });

    
});

