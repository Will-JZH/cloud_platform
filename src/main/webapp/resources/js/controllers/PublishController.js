'use strict';

/**
 *服务发布控制器 
 */

var PublishController = function($scope, $http) {
	$scope.messages = [{"name":"服务1", "price":2, "time":10},{"name":"服务2", "price":3, "time":"11"}];
	$scope.name = "fuwu";

}