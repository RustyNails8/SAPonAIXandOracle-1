/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/m/semantic/SemanticToggleButton', 'sap/m/semantic/SemanticConfiguration'], function(SemanticToggleButton, SemanticConfiguration) {
	"use strict";

	/**
	 * Constructor for a new MultiSelectAction.
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Custom initial settings for the new control
	 *
	 * @class
	 * A MultiSelectAction button has default semantic-specific properties and is
	 * eligible for aggregation content of a {@link sap.m.semantic.SemanticPage}.
	 *
	 * @extends sap.m.semantic.SemanticToggleButton
	 *
	 * @author SAP SE
	 * @version 1.36.13
	 *
	 * @constructor
	 * @public
	 * @since 1.30.0
	 * @alias sap.m.semantic.MultiSelectAction
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */

	var MultiSelectAction = SemanticToggleButton.extend("sap.m.semantic.MultiSelectAction", /** @lends sap.m.semantic.MultiSelectAction.prototype */ {
		metadata: {
			library: "sap.m"
		}
	});

	var oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.m");

	/**
	 * Defines the icon url for each state
	 * @private
	 */
	MultiSelectAction._PRESSED_STATE_TO_ICON_MAP = {
		"true": "sap-icon://sys-cancel",
		"false": "sap-icon://multi-select"
	};

	/**
	 * Defines the icon tooltip and screen reader text for each state
	 * @private
	 */
	MultiSelectAction._ACC_TOOLTIP_TO_ICON_MAP = {
		"true": oBundle.getText("SEMANTIC_CONTROL_MULTI_SELECT_CANCEL"),
		"false": oBundle.getText("SEMANTIC_CONTROL_MULTI_SELECT")
	};

	/**
	 * Sets the 'pressed' property value.
	 * Overwrites to apply semantic-specific logic
	 * @Overwrites
	 * @private
	 */
	MultiSelectAction.prototype._setPressed = function(bPressed, bSuppressInvalidate) {
		var sIconUrl = MultiSelectAction._PRESSED_STATE_TO_ICON_MAP[bPressed];
		var sIconTooltip = MultiSelectAction._ACC_TOOLTIP_TO_ICON_MAP[bPressed];
		this._getControl().setIcon(sIconUrl);
		var sId = SemanticConfiguration.getAriaId("sap.m.semantic.MultiSelectAction");
		this._getControl().setTooltip(sIconTooltip);
		sap.ui.getCore().byId(sId).$().text(sIconTooltip);
	};

	return MultiSelectAction;
}, /* bExport= */ true);
