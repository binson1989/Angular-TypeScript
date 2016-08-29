module app.pxtable {
    interface IPxTableModel {
        title: string;
        data: app.domain.IProduct[];
    }

    class PxTableController implements IPxTableModel {
        title: string;
        data: app.domain.IProduct[];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService: app.common.DataAccessService) {
            this.title = "Px Table Demo";
            this.data = [];

            var productResource = dataAccessService.getProductResource();
            productResource.query((response: app.domain.IProduct[]) => {
                this.data = response;
            });
        }
    }

    angular.module("productManagement")
        .controller("PxTableController", PxTableController);
}