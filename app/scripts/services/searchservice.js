(function(module) {
    module.factory('searchService', searchService);
    searchService.$inject = ['$http', '$q', '$log'];

    function searchService(http, q, log) {
        return {
            test: function() {
                return 'test';
            },
            getSearchResults: function(searchText) {
                var deferred = q.defer();
                http.get('https://hackerearth.0x10.info/api/accolite_product?type=json&query=list_product').success(function(response) {
                    deferred.resolve(response);
                }, function(err) {
                    deferred.reject({
                        'ERROR': err
                    });
                    log.error(err);
                });
                return deferred.promise;
            }
        };
    };
})(angular.module('accohubApp'))