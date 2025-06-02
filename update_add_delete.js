sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
    
], (Controller,JASONModel) => {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit() {
            var oData=
            {
         people:[]
         
            };
            var oModel=new JASONModel(oData);
            this.getView().setModel(oModel);
        },
      // this add  funct. is for table
        onAdd()
        {
           var oModel = this.getView().getModel();
var sName = this.byId("inputname").getValue();
var sPassword = this.byId("inputpassword").getValue();

var aPeople = oModel.getProperty("/people");

var oNewPerson = {
    name: sName,
    password: sPassword
};

aPeople.push(oNewPerson);

oModel.setProperty("/people", aPeople);

this.byId("inputname").setValue("");
this.byId("inputpassword").setValue("");

        }
    ,
      // this update func. is for list element 
    onUpdate()
    {
        var oList=this.byId("list");
        var oSelectedItem=oList.getSelectedItem();
        var sNewName=this.byId("inputname").getValue();
        var sPath=oSelectedItem.getBindingContext().getPath();
        var oModel =this.getView().getModel();
        oModel.setProperty(sPath+"/name",sNewName);

    },
    onDelete()
    {
        var oList=this.byId("list");
        var oSelectedItem=oList.getSelectedItem();
        var sPath=oSelectedItem.getBindingContext().getPath();
        var iIndex= parseInt(sPath.split("/")[2]);
        var aPeople=this.getView().getModel().getProperty("/people");
        aPeople.splice(iIndex,1);
        this.getView().getModel().refresh();

    }
       
    });
});
