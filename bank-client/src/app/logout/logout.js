angular.module("logout", ['transaction'])

    .controller("LogoutCtrl", ["$scope", '$http', 'windowService', function ($scope, $http, windowService) {

        $scope.logout = function () {
            $http.post("/logout")
                .success(function () {
                    windowService.redirect();
                });
        };
    }]
);