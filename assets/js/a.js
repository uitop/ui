var app = angular.module('myAver', ['ngRoute','chart.js','slickCarousel']);
app.controller("skillApp", function ($scope) { $scope.isShow = 0; });
app.controller("radarCht", function ($scope) {
    $scope.labels =["GOOGLELING", "UI", "SCRIPT", "TOOL", "ALGORITHM", "PHP", "SMILE"];
    $scope.data = [ [100, 100, 95, 90, 85, 80, 100] ];
    $scope.options = {
        scale: {
            ticks: { suggestedMin: 40, suggestedMax: 100 }
        }
    };
});
app.controller("barCht", function ($scope) {
    $scope.labels =["GOOGLELING", "UI", "SCRIPT", "TOOL", "ALGORITHM", "PHP", "SMILE"];
    $scope.data = [ [100, 100, 95, 90, 85, 80, 100] ];
    $scope.options = {
        scale: {
            ticks: {
                suggestedMin: 40,
                suggestedMax: 100
            }
        }
    };
});
app.controller('SlickController', function ($scope) {
    $scope.slickConfig2 = {
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        method: {}
    };
});