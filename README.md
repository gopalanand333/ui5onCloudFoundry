# UI5 On Cloud foundry
SAP UI5 application of cloud foundry.
This application contains a sample UI5 appliation and its manifest.yaml 
This can be used as reference or directly deployed.
## you can make any plain ui5 application deployed in cloud-foundry.
- create a manifest.yml
- specify the application name 
- specify the build_pack: for ui5 it's static buildpack 
- in index.html give the ui5 resource url, as relative url won't work
- cf push from the yaml path
#### Your application is now running

