/**
 * Created by Stéphanie on 08/03/2016.
 */

var app = angular.module('app', []);


app.controller('firstCtrl', ['$scope', function($scope) {
    $scope.title = 'Vous êtes plus back-end ou Front-end en tant que developpeur ?';


    $scope.categories = [
        {
            name:'Javascript',
            description: 'Le métier de Developer  consiste à développer des application ou site internet !',
            score: 0
        },
        {
            name:'php',
            description: 'Le métier de Webdesign  consiste à développer des application ou site internet !',
            score: 0
        }
    ];

    $scope.questions = [
        {
            label:'Quel est le rapport entre Java et JavaScript ?',
            response: [{text: "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web",cat:"Javascript", score:0},
                        {text: 'Ce sont deux langages différents, malgré quelques points communs dans la syntaxe',cat:"Javascript", score:1},
                        {text: 'Java est une version améliorée de JavaScript',cat:"Javascript", score:0},
                        {text: "Java est une île, ça n'a rien à voir !",cat:"Javascript", score:0}
            ]
        },
        {
            label:'Laquelle de ces syntaxes est correcte ?',
            response: [{text: 'if (a != 2) {}',cat:"Javascript", score:1},
                        {text: 'if a != 2 {}',cat:"Javascript", score:0},
                        {text: 'if (a <> 2) {}',cat:"Javascript", score:0},
                        {text: 'if a <> 2 {}',cat:"Javascript", score:0}

            ]
        },
        {
            label:"Quel attribut des noeuds de l'arbre DOM correspond à l'attribut (X)HTML class ?",
            response: [
                {text: 'class',cat:"Javascript", score:1},
                {text: 'CLASS',cat:"Javascript", score:0},
                {text: 'className',cat:"Javascript", score:0},
                {text: 'kiwi',cat:"Javascript", score:0}

            ]
        },
        {
            label:"Dans un fichier JavaScript externe (.js), il faut :",
            response: [
                {text: "entourer le code avec les balises <script> et </script>.",cat:"Javascript", score:0},
                {text: 'préciser l’encodage du fichier avec la règle @charset.',cat:"Javascript", score:0},
                {text: 'échapper les caractères spéciaux (X)HTML.',cat:"Javascript", score:0},
                {text: 'Aucune des réponses précédentes.',cat:"Javascript", score:1}

            ]
        },
        {
            label:"Lequel de ces types d'événements n'existe pas ?",
            response: [
                {text: "blur",cat:"Javascript", score:0},
                {text: 'load',cat:"Javascript", score:0},
                {text: 'mouseclick',cat:"Javascript", score:1},
                {text: 'mouseout',cat:"Javascript", score:0}

            ]
        },
        {
            label:"Que signifie PHP ?",
            response: [
                {text: "Page Helper Process",cat:"php", score:100},
                {text: 'Programming Home Pages',cat:"php", score:0},
                {text: 'PHP: Hypertext Preprocessor',cat:"php", score:0}
            ]
        },
        {
            label:"Quelle fonction retourne la longueur d'une chaîne de texte ?",
            response: [
                {text: "strlen",cat:"php", score:100},
                {text: 'strlength',cat:"php", score:0},
                {text: 'length',cat:"php", score:0},
                {text: 'substr',cat:"php", score:0}
            ]
        },
        {
            label:"Comment accède-t-on au 1er élément chaton dans le tableau suivant : $tableau = Array('chaton' , 'ornithorynque', 'dauphin'); ?",
            response: [
                {text: "$tableau[1]",cat:"php", score:0},
                {text: '$tableau[0]',cat:"php", score:100},
                {text: '$tableau{0}',cat:"php", score:0},
                {text: '$tableau.get(1)',cat:"php", score:0}
            ]
        },
        {
            label:"Comment vérifie-t-on l'égalité de deux variables : $a et $b ?",
            response: [
                {text: "$a = $b",cat:"php", score:0},
                {text: '$a == $b',cat:"php", score:100},
                {text: '$a != $b',cat:"php", score:0},
                {text: 'if($a,$b)',cat:"php", score:0}
            ]
        },
        {
            label:"Quelle est l'utilité de l'opérateur || ?",
            response: [
                {text: "Il sert à vérifier que toutes les conditions sont réalisées.",cat:"php", score:0},
                {text: "Il sert à vérifier qu'une, et une seule, des conditions est réalisée.",cat:"php", score:0},
                {text: "Il sert à vérifier qu'une, au moins, des conditions est réalisée.",cat:"php", score:100}
            ]
        }

    ];

    //Je push les checkBox cochées dans mon tableau
    // $scope.checked_value = ['apple', 'pear'];




    //Qd je clique sur le bouton valider :
    $scope.addResponse = function(check){
        $scope.check = check;
        $scope.key = key;

        if($scope.check) {
            console.log('lol');
        }else {
            console.log('pas de case coché');
        }


        // $scope.check = [];
        // $scope.key = key;
        
        console.log('lol');

    };


}]);




