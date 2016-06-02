angular.module("Employee", [])
.service('employeeService', ['$http', 'apiUrl', '$q', 'handleResponseService',
    function ($http, apiUrl, $q, handleResponseService) {
        return ({
            getAllEmployees: getAllEmployees
        });

        function getAllEmployees(number) {
            var request = $http({
                method: "GET",
                url: apiUrl + "Contact/GetAllEmployees",
                params: {
                    number: number
                }
            });
            return (request.then(handleResponseService.handleSuccess, handleResponseService.handleError));
        }

    }])

    .controller('employeeController', ['$scope', '$rootScope', '$state', 'employeeService', '$timeout',
        function ($scope, $rootScope, $state, employeeService, $timeout) {
            $scope.$state = $state;
            $scope.number = 0;
            $scope.timer = false;

            $scope.addEmpl = function () {
                employeeService.getAllEmployees($scope.number + 1).then(function (employees) {
                    $scope.number++;
                    $scope.employees = employees;
                }, (function (error) {
                    alert(error);
                }));
            }

            $scope.subtractEmpl = function () {
                employeeService.getAllEmployees($scope.number - 1).then(function (employees) {
                    $scope.number--;
                    $scope.employees = employees;
                });
            }

            $scope.addSubtractEmpl = function () {
                $scope.timer = true;
                employeeService.getAllEmployees($scope.number + 1).then(function (employees) {
                    $scope.number++;
                    $scope.employees = employees;
                    $timeout(function () {
                        employeeService.getAllEmployees($scope.number - 1).then(function (employees) {
                            $scope.number--;
                            $scope.employees = employees;
                            $scope.timer = false;
                        });
                    }, 5000);
                });
            }


        }]);


