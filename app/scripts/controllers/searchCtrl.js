/**
searchCtrl is the core controller which handles the search behavior and generates the results

*/
(function(module) {
    "use strict";
    module.controller('searchCtrl', searchCtrl);
    searchCtrl.$inject = ['$scope', 'searchService'];

    function searchCtrl(scope, searchService) {
        var vm = this;
        vm.search = "";
        vm.sortby = "";
        vm.showloading = false;
        vm.searchResults = [];
        
        scope.sort = function(sort){
            console.log(sort);
        }
        scope.clearSearchText = function() {
            vm.search = "";
        };

        scope.search = function() {
            vm.searchResults = [];
            vm.showloading = true;
            searchService.getSearchResults("test").then(function(data) {
                vm.showloading = false;
                vm.searchResults = data.menu;
            })
        };
    };
})(angular.module('accohubApp'));