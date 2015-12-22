(function () {
    'use strict';

    angular.module('app.task', []).controller('TaskController', TaskController);

    TaskController.$inject = ['UserService'];
    function TaskController(UserService) {
        var vm = this;
        vm.getTasks = function () {
            var tasks = [];
            UserService.getTasks(onSuccess, onError);
        };

        function onSuccess() {
            console.log("Se recuperaron las tareas");
        };

        function onError() {
            console.log("Nooo se recuperaron las tareas");
        };
    }
})();


