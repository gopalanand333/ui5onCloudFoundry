/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/cf/ui5OnCloudFoundry/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});