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
                $scope.number++;
                employeeService.getAllEmployees($scope.number).then(function (employees) {
                    $scope.employees = employees;
                });
            }

            $scope.substractEmpl = function () {
                $scope.number--;
                employeeService.getAllEmployees($scope.number).then(function (employees) {
                    $scope.employees = employees;
                });
            }

            $scope.addSubstractEmpl = function () {
                $scope.number++;
                $scope.timer = true;
                employeeService.getAllEmployees($scope.number).then(function (employees) {
                    $scope.employees = employees;
                    $timeout(function () {
                        $scope.number--;
                        employeeService.getAllEmployees($scope.number).then(function (employees) {
                            $scope.employees = employees;
                            $scope.timer = false;
                        });
                    }, 3000);
                });
            }


        }]);


