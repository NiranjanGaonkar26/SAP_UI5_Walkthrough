sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.App", {
        onInit(){                                           // SAPUI5’s lifecycle methods that is invoked by the framework when the controller is created, similar to the constructor of a control.
          //Set the datamodel on the view
          const oData = {
            recipient : {
                name: "World"
            }
          };
          const oModel = new JSONModel(oData);
          this.getView().setModel(oModel);              //To be able to use this model from within the XML view, we call the setModel function on the view and pass on our newly created model. The model is now set on the view.

          // set i18n model on view
          const i18nModel = new ResourceModel({
            bundleName: "ui5.walkthrough.i18n.i18n"
          });
          this.getView().setModel(i18nModel, "i18n"); 
        },
       
        onShowHello() {
          // show a native JavaScript alert
          //alert("Hello World");

          //read msg from i18n model
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sRecipient = this.getView().getModel().getProperty("/recipient/name");
          const sMsg = oBundle.getText("helloMsg", [sRecipient]);

          // Show message
          MessageToast.show(sMsg);
       }
    });
 });