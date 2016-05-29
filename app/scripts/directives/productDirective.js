(function(module){
	module.directive('product',product);
	
	function product(){
		return {
			restrict : 'E',
			scope : '@',
			templateUrl : '../../templates/product.html',
			link: link
		}

		function link($scope, iElm, iAttrs, controller){

		}
	};
})(angular.module('accohubApp'));