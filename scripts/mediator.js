'use strict';

// 

var MODULES = MODULES || {}; 

var mediator = (function () {
	
	var mainModule = 'main';
	
	return {
		module : function (name, fn, initOnLoad) {
			MODULES[name] = new fn();
			if (name === mainModule) {
				this.init(mainModule);
			} else {
				if (initOnLoad) {
					this.start(name);
				}
			}
		},
		start : function (name) {
			for(var key in MODULES[name]) {
			    if ( MODULES[name][key] instanceof Function ) {
			    	MODULES[name][key]();
			    }
			}
			
		},
		init : function(mainModule){
			MODULES[mainModule]['init'];
		}
	}

})();