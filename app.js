(() => {
'use strict'

    var app = angular.module('myApp', ['ngMaterial'])
    app.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange')
            .warnPalette('red')
 
    });
    app.controller ('Ctrl1', btns)

    function btns ($scope) {


      //////


        $scope.bottoni = ['AC', '±', '%', '÷', 7, 8, 9, '×', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']

      /////


        $scope.valDisplay = []
        $scope.valMath = []        

        $scope.numbs = [1,2,3,4,5,6,7,8,9]

        $scope.getItFunc = function (item_ID) {

            console.log('item_ID: ' + item_ID)
            console.log($scope.valDisplay)
            console.log($scope.valMath)

            var digit = document.getElementById('ID'+item_ID).innerText

            if (digit == 'AC') {
              $scope.valDisplay = []
              $scope.valMath = []
            }
            else if (digit == '±') {
              $scope.valDisplay.push(-$scope.valDisplay[item_ID - 1])
              $scope.valMath.push(-$scope.valMath[item_ID - 1])
            }
            else if (digit == '÷') {
              $scope.valDisplay.push(digit)
              $scope.valMath.push('/')
            }
            else if (digit == '×') {
              $scope.valDisplay.push(digit)
              $scope.valMath.push('*')
            }
            else if (digit == '=') {
              $scope.valMath.push(eval($scope.valMath.join('')))
            }
            else {
              $scope.vaDisplay.push(digit)
              $scope.valMath.push(digit)
            }

        }

        $scope.indentifier = (item_ID) => {
          
          if (item_ID < 3) {
            return "{background: 'blue-grey'}"
          }
          
          if (item_ID == 3 || item_ID == 7 || item_ID == 11 || item_ID == 15) {
            return "{background: 'accent'}"
          }
          
          if (item_ID == 18) {
            return "{background: 'warn'}"
          }
          
          
        } 

    }

    

})()


