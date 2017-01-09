module app {
    var main = angular.module("productManagement", ["ngRoute", "common.services", "productResourceMock"]);
    
    fetchData().then(bootstrapApplication);

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get("http://localhost:2900/api/categories").then(function(response) {
            main.constant("config", response.data);
        }, function(errorResponse) {
            // Handle error case
        });
    }

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["productManagement"]);
        });
    }

    main.config(routeConfig);

    routeConfig.$inject = ["$routeProvider", 'config'];
    function routeConfig($routeProvider: ng.route.IRouteProvider, config: any): void {
        console.log('inside route config...');
        console.log('Constant value: ' + config);
        
        $routeProvider.when("/productList", {
            templateUrl: "/app/products/productListView.html",
            controller: "ProductListController as vm"
        })
        .when("/productDetail/:productId", {
            templateUrl: "/app/products/productDetailView.html",
            controller: "ProductDetailController as vm"
        })
        .when("/pxtable", {
            templateUrl: "/app/products/pxtable.html",
            controller: "PxTableController as vm"
        })
        .otherwise("/productList");
    }

    class MainController {
        message: string;

        static $inject = ['config'];
        constructor(config: any) {
            console.log('Constant value: ' + config);
            console.log('Controller initialized');
        }
    }

    angular.module('productManagement').controller('MainController', MainController);
}