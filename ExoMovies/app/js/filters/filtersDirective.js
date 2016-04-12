/**
 * Created by Stéphanie on 09/04/2016.
 */
myApp.filter("dataFilter", ['$filter', function($filter){
    return function(input) {
        date = $filter('date')(new Date(input), 'longDate');
        return date;
    }
}]);

// myApp.filter("anneeFilter", [$filter, function($filter) {
//     return function () {
//         alert('sa marche');
//         $filter('orderBy')($scope.movie.title,true );
//     }
// }]);


//créer des étoiles de notation
myApp.filter('starsFilter',function () {

    return function(rate) {
        return "\u2605".repeat(rate);
    };

});


//Mettre une image vide
myApp.filter('noImgFilter',function () {

    return function(poster) {
            if(poster == null) {
            //     console.log(poster);
                return poster = 'img/no-poster.jpg';
            } else {
               return  poster;
            }
    };

});

