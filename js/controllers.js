app.controller('navController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            if (path == "/" && $location.path() == "/") {
                return true;
            } else if (path == "/") {
                return false;
            }
            return true;
        }
        return false;
    };
}]);

app.controller('homeController', ['$scope', function ($scope) {
    $('#pg-home').fadeIn();
    $('#pg-home h3').delay(750).fadeIn();
}]);

app.controller('productController', ['$scope', function ($scope) {
    $('#pg-product').fadeIn();
}]);

app.controller('shoppersController', ['$scope', function ($scope) {
    $('#pg-shoppers').fadeIn();
}]);

app.controller('retailersController', ['$scope', function ($scope) {
    $('#pg-retailers').fadeIn();

    $scope.showMore = function () {
        $('.bg-img, #retailers-learn-btn').fadeOut(500);
        $('#retailers-signup-btn').delay(500).fadeIn(500);
        $('#retailers-info').slideDown(1000);
    };

}]);

app.controller('detailsController', ['$scope', function ($scope) {
    $('#pg-details').fadeIn();
}]);

app.controller('aboutController', ['$scope', function ($scope) {
    $('#pg-about').fadeIn();
}]);