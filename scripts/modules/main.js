'use strict';

mediator.module('main', function () {

	var newUser = null;

	var setUserValues = function(){
		var userName = MODULES['config'].el.name.val();
		var userSurName = MODULES['config'].el.surName.val();
		var userEmail = MODULES['config'].el.email.val();
		var userPassword = MODULES['config'].el.password.val();
		newUser = new User(userName, userSurName, userEmail, userPassword);
	}

	var register = function(){
		MODULES['utils']['doRequest'](MODULES['config'].AJAX.METHODS.post, MODULES['config'].URLS.register, {user : newUser}, MODULES['config'].DATA_TYPES.json, function (message) {
			console.log(message);
			MODULES.utils.setLocalItem('newUser', newUser);
		}, function (message) {
			console.log(message);
			MODULES.utils.setLocalItem('newUser', newUser);
		}, function (message) {
			console.log(message);
		});
	};

	var login = function(email, password){
		var userLoginEmail = MODULES['config'].el.loginEmail.val(); 
		var userLoginPassword = MODULES['config'].el.loginPassword.val();
		var localUser = MODULES.utils.getLocalItem('newUser');
		if (localUser.email === userLoginEmail && localUser.password === userLoginPassword) {
			MODULES.utils.setCookie('userLoginEmail', userLoginEmail);
			MODULES.utils.setCookie('userLoginPassword', userLoginPassword);
			console.log(MODULES.config.MESSAGES.LOGIN_SUCCESS);
			MODULES.main.hideRegisterAndLoginButton();
		} else {
			console.error(MODULES.config.MESSAGES.LOGIN_ERROR);
		}
	};

	var hideRegisterAndLoginButton = function(){
		$(MODULES.config.el.loginAndRegisterModalButton).hide();
	}

	var init = function (){
		var newUser = null;
		app.bindEvents();
	};

	return (function () {
		return {
			setUserValues : setUserValues,
			register : register,
			login : login,
			hideRegisterAndLoginButton : hideRegisterAndLoginButton,
			init : init
		}
	})();

}, false);
