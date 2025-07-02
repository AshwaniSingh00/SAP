sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
    ,
    "sap/m/MessageToast",
    
], (Controller,JASONModel,MessageToast) => {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit() {
            

        },
        validate(inPass){
            
            if(inPass.length>=1 && inPass.length<8)
            {
                MessageToast.show("Enter Valid Password",{duration: 2000});
                return false;
            }
            else if(inPass.length==0)
            {
                MessageToast.show("Enter Password",{duration: 2000});
                return false;
            }
            else{
                MessageToast.show("Sign In",{duration: 4000});
                return true;
            }
            
        },
        onSignIn: function()
        {
            var inPass = this.byId("password").getValue();
            this.validate(inPass);
            if(this.validate(inPass))
            {
                this.getOwnerComponent().getRouter().navTo("View3");
            }
            
        }
       
    });
});
