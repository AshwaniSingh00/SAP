sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"


], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("invoice.controller.View1", {
        onInit() {
            var oData=
            {
         product:[]
         
            };
            var oModel=new JSONModel(oData);
            this.getView().setModel(oModel);
        }
        ,
        validat(sId)
        {
             
            if(sId>=1 && sId<=3)
            {
                return true;
            }
            else{
                return false;
            }
        }
        ,
        onAdd()
        {
            var oModel = this.getView().getModel();
            var sId = this.byId("productId").getValue();
            const nId = parseInt(sId,10);
            if(!this.validat(nId))
            {
              sap.m.MessageToast.show("Enter Valid Product Id");
              return;
            }
        

switch (nId) {
    case 1:
      sId = "Biscuit";
      break;
    case 2:
      sId = "Sprite";
      break;
    case 3:
      sId = "Tea";
      break;
}
var sRate = this.byId("rate").getValue();
var sQuant = this.byId("quant").getValue(); 
var nRate=parseFloat(sRate,10);
var nQuant=parseInt(sQuant,10);
var sTotal=sRate*sQuant;
var nTotal=parseFloat(sTotal,10);
var sGst=(nTotal*5)/100;
var sNetTotal=parseFloat(sGst,10)+nTotal;
var sDiscount=(parseFloat(sNetTotal,10)*10)/100;
var sFinalTotal=parseFloat(sNetTotal,10)-parseFloat(sDiscount,10);

var aProduct = oModel.getProperty("/product");

var oNewProduct = {
    productId:sId,
    rate:sRate,
    quantity:sQuant,
    total:sTotal,
    gst:sGst,
    netTotal:sNetTotal,
    discount:sDiscount,
    finalTotal:sFinalTotal
};

aProduct.push(oNewProduct);

oModel.setProperty("/product", aProduct);

this.byId("productId").setValue("");
this.byId("rate").setValue("");
this.byId("quant").setValue("");

    }
    });
});
