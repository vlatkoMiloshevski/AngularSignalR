
app.config(function ($stateProvider, $urlRouterProvider, appBaseUrl) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            title: 'home',
            controller: 'homeController',
            url: '/home',
            templateUrl: appBaseUrl + "Module/Home"
        })

       .state('home.walk', {
           title: 'walk',
           controller: 'walkController',
           url: '/walk',
           templateUrl: appBaseUrl + "Module/Walk",
       })

       .state('home.employee', {
           title: 'employee',
           controller: 'employeeController',
           url: '/employee',
           templateUrl: appBaseUrl + "Module/Employee",
       })

})
    .controller("MainCtrl", ['$scope',
    function ($scope) {

    }])
    .service('signalR', ['$rootScope', function ($rootScope) {

        var hub = $.connection.testHub;

        init = function () {
            $.connection.hub.start();
        };
        sendClient = function () {
            hub.client.sendFromServer = function () {
                $rootScope.$broadcast('test', {})
            };
        };
        sendToServer = function () {
            hub.server.actServer();
        };

        return {
            sendClient: sendClient,
            sendToServer: sendToServer,
            init: init
        }
    }]);

app.service("handleResponseService", ['$q',
function ($q) {
    var api = {
        handleError: function handleError(response) {
            if (response.status != 401) {
                if (!angular.isObject(response.data)) {
                    return ($q.reject("An unknown error occurred."));
                }

                if (response.data.exceptionMessage) {
                    return ($q.reject(response.data.exceptionMessage));
                } else if (response.data.modelState) {
                    return ($q.reject(response.data.modelState));
                } else if (response.data.message) {
                    return ($q.reject(response.data.message));
                }
                return ($q.reject(response.data.message));
            }
            else {
                return ($q.reject(response.data.message));
            }
        },

        handleSuccess: function handleSuccess(response) {
            return (response.data);
        }
    };

    return api;
}]);
