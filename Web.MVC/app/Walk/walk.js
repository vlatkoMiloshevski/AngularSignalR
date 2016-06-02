angular.module("Walk", [])
.service('walkService', ['$http', '$q', 'handleResponseService',
    function ($http, $q, handleResponseService) {
        return ({

        });

    }]).controller('walkController', ['$scope', 'signalR',
        function ($scope, signalR) {

            $scope.toggleClick = function () {
                // signalR
                signalR.sendToServer();

            };

        }]);
