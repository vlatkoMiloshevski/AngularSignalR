angular.module("Home", [])
.service('homeService', ['$http', '$q', 'handleResponseService',
    function ($http, $q, handleResponseService) {
        return ({

        });

       
    }])

    .controller('homeController', ['$scope', 'signalR', '$rootScope',
        function ($scope, signalR, $rootScope) {

            $scope.check = true;
            // trigger server to return 
            signalR.sendClient();
            // Recieve from server and send to client
            $scope.$on('test', function (event, data) {
                $scope.$apply(function () {
                    if ($scope.check) {
                        $scope.check = false;
                    }
                    else {
                        $scope.check = true;
                    }
                });
            });

            // initialize connection
            signalR.init();

        }]);


