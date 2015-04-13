'use strict';

mediator.module('utils', function () {
	return {
		doRequest : function (type, url, data, dataType, done, fail, always){
			$.ajax({
				type : type,
				url: url,
				data: data,
				dataType: dataType
			})
			.done(function() {
				done('success');
			})
			.fail(function() {
				fail('fail');
			})
			.always(function() {
				always('always');
			});
		},
		isLocalStorageActive : function(){
			return Modernizr.localstorage;
		},
		setLocalItem : function(name, obj){
			if (this.isLocalStorageActive) {
				localStorage.setItem(name, JSON.stringify(obj));
			}
		},
		getLocalItem : function(name){
			if (this.isLocalStorageActive) {
				return JSON.parse(localStorage.getItem((name)));
			}
		},
		setCookie : function(key, val){
			$.cookie(key, val);
		},
		getCookie : function (key) {
			return $.cookie(key);
		}
	}
}, false);