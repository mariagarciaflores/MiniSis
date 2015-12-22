(function () {
    'use strict';

    angular.module('app.task', []).controller('TaskListController', TaskListController);

    TaskListController.$inject = ['UserService'];
    
    function TaskListController(UserService) {
        var vm = this;
        vm.task = {
            title: 'task1',
            description: 'first task'
        };
        
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


