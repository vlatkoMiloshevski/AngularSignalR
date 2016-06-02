angular.module("Home", [])
.service('homeService', ['$http', '$q', 'handleResponseService',
    function ($http, $q, handleResponseService) {
        return ({

        });

       
    }])

    .controller('homeController', ['$scope', 'signalR', '$rootScope', '$state',
        function ($scope, signalR, $rootScope, $state) {
            $scope.$state = $state;
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


