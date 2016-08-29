var app;
(function (app) {
    var pxtable;
    (function (pxtable) {
        var PxTableController = (function () {
            function PxTableController(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Px Table Demo";
                this.data = [];
                var productResource = dataAccessService.getProductResource();
                productResource.query(function (response) {
                    _this.data = response;
                });
            }
            PxTableController.$inject = ["dataAccessService"];
            return PxTableController;
        }());
        angular.module("productManagement")
            .controller("PxTableController", PxTableController);
    })(pxtable = app.pxtable || (app.pxtable = {}));
})(app || (app = {}));
