sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast,JSONModel) => {
   "use strict";

   return Controller.extend("project1.controller.View1", {
    onInit: function()
    {
        var oData={
            products: [
                { name: "Laptop", category: "electronics" },
                { name: "Car", category: "vehicle" },
                { name: "notebook", category: "Stationary" }
            ]
        };
        var oModel=new JSONModel(oData);
        this.getView().setModel(oModel);
    }
    ,
      onsignin: function() {
         MessageToast.show("You have Signed In");
      },
      onValueHelpRequest: function()
      {
        MessageToast.show("Enter your Name");
      },
    });
});
