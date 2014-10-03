/**
 * Created by emil on 14-9-26.
 */
angular.module('transaction', ['ui.router'])

    .config(['$stateProvider', '$httpProvider', function($stateProvider, $httpProvider) {
        $stateProvider.state('transaction', {
            url: '/transaction',
            views: {
                "main": {
                    templateUrl: 'transaction/transaction.tpl.html',
                    controller: 'TransactionCtrl'
                }
            },
            data: {pageTitle: 'Transaction'}
        });

        $httpProvider.interceptors.push('unauthorisedInterceptor');
    }])

    .factory('unauthorisedInterceptor', ['$q','$rootScope', '$window', function($q, $rootScope, $window) {

        return {
            'responseError': function(rejection) {
                if(rejection.status === 401) {
                   $window.location.href = rejection.data;
                }

                $rootScope.errorMessage = rejection.data;

                console.log(rejection);
                console.log($q.reject(rejection));

                return $q.reject(rejection);
            }

        };

    }])

.controller('TransactionCtrl', ['$scope', '$state', 'bankService', function($scope, $state, bankService) {

        $scope.navigateToTransaction = function() {
            $state.go('transaction');
        };


        bankService.fetchCurrentAmount()
            .success(function(data) {
                $scope.currentAmount = data.amount;
            });

        $scope.deposit = function(amount) {
            bankService.deposit(amount)
                .success(function(data) {
                    $scope.currentAmount = data.amount;
                });
        };

        $scope.withdraw = function(amount) {

            bankService.withdraw(amount)
                .success(function(data) {
                    $scope.currentAmount = data.amount;
                    console.log($scope.currentAmount);
                });
        };
    }])

.factory('bankService', ['$http', function($http) {

        return {
            fetchCurrentAmount: function() {
                return $http.post("/bankService/getAmount");
            },

            deposit: function(amount) {
                return $http.post('/bankService/deposit', {amount: amount});
            },

            withdraw: function(amount) {
                return $http.post("/bankService/withdraw", {amount: amount});
            }
        };

    }]);