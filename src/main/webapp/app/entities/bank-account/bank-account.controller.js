(function() {
    'use strict';

    angular
        .module('jhipsterNoI18NSampleApplicationApp')
        .controller('BankAccountController', BankAccountController);

    BankAccountController.$inject = ['BankAccount'];

    function BankAccountController(BankAccount) {

        var vm = this;

        vm.bankAccounts = [];

        loadAll();

        function loadAll() {
            BankAccount.query(function(result) {
                vm.bankAccounts = result;
                vm.searchQuery = null;
            });
        }
    }
})();
