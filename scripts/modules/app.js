'use strict';

mediator.module('app', function () {

	var bindEvents = function(){
		$(MODULES['config'].el.registerButton).on('click', function(event) {
			event.preventDefault();
			MODULES['main']['setUserValues']();
			MODULES['main']['register']();
		});

		$(MODULES['config'].el.loginButton).on('click', function(event) {
			event.preventDefault();
			MODULES['main']['login']();
		});		
	}

	var initCustomScripts = function(){}

	return {
		bindEvents : bindEvents

	}

}, true);