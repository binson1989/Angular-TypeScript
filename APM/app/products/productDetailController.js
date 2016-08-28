var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailController = (function () {
            function ProductDetailController($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                var productResource = dataAccessService.getProductResource();
                productResource.get({ productId: $routeParams.productId }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailController.$inject = ["$routeParams", "dataAccessService"];
            return ProductDetailController;
        }());
        angular.module("productManagement")
            .controller("ProductDetailController", ProductDetailController);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
