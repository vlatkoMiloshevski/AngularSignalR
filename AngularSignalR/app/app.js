
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

})
    .controller("MainCtrl", ['$scope',
    function ($scope) {

    }])
    .service('signalR', ['$rootScope', function ($rootScope) {

        var hub = $.connection.testHub;

        init = function () {
            $.connection.hub.start()
            //    .done(function () {
            //}).fail(function (data) {
            //})
            ;
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
