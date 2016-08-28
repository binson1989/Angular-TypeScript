var app;
(function (app) {
    var productList;
    (function (productList) {
        /**
         * ProductListController
         */
        var ProductListController = (function () {
            function ProductListController(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Product List";
                this.showImage = false;
                this.products = [];
                var productResource = dataAccessService.getProductResource();
                productResource.query(function (data) {
                    _this.products = data;
                });
            }
            ProductListController.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            ProductListController.$inject = ["dataAccessService"];
            return ProductListController;
        }());
        angular.module("productManagement")
            .controller("ProductListController", ProductListController);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
