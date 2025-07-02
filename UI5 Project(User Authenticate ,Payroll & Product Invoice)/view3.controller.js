sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("project2.controller.View3", {
        onInit() {
            var oData=
            {
         employ:[]
         
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
            
        },
        onconfirm()
        {
            var oModel = this.getView().getModel();
            var sId = this.byId("inputid").getValue();
            const nId = parseInt(sId,10);
            if(!this.validat(nId))
            {
              sap.m.MessageToast.show("Enter Valid Employ Id");
              return;
            }
            switch (nId) {
                case 1:
                  sId = "Ashwani Singh";
                  break;
                case 2:
                  sId = "Akshat Saxena";
                  break;
                case 3:
                  sId = "Yash Gupta";
                  break;
            }
            var sSalary = this.byId("inputsalary").getValue(); 
            if(sSalary.length===0)
            {
            sap.m.MessageToast.show("Enter Salary")
            return;
            }
            var sHra=(parseFloat(sSalary,10)*30)/100;
            var ntaf=(parseFloat(sSalary,10)*25)/100;
            var sDaf=(parseFloat(sSalary,10)*20)/100;
            var sPf=(parseFloat(sSalary,10)*12)/100;
            var sGross=parseFloat(sSalary,10)+parseFloat(sDaf,10)+parseFloat(sHra,10)+parseFloat(ntaf,10)-parseFloat(sPf,10);
            var sLeave=this.byId("inputleave").getValue();
            var oneDay=parseFloat(sSalary,10)/30;
            var sLevAmount=parseFloat(sLeave,10)*oneDay;
            var sOt=parseFloat(this.byId("inputot").getValue(),10);
            var sOtam=parseFloat(this.byId("inputamount").getValue(),10);
            var calOt=sOt*sOtam;
           var netTotal=sGross+calOt-sLevAmount;


            var aemp=oModel.getProperty("/employ");
            var oNewEmp={
                 employId:sId,
                 salary:sSalary,
                 hra:sHra,
                 taf:ntaf,
                 daf:sDaf,
                 pf:sPf,
                 grosssalary:sGross,
                 leaveamount:sLevAmount,
                 ot:calOt,
                 nettotal:netTotal
            };
            aemp.push(oNewEmp);
            oModel.setProperty("/employ", aemp);
            this.byId("inputid").setValue("");
            this.byId("inputsalary").setValue("");
        },onpress(){
            this.getOwnerComponent().getRouter().navTo("View1");
        },
        onproductadd()
        {
            this.getOwnerComponent().getRouter().navTo("View2"); 
        }
    


});
});
