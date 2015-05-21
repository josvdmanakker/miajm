'use strict';

/**
 * Simple function to render some text on a element
*/
function write (el, text) {
    if(!('textContent' in el)) {
        el.innerText = text;
    } else {
        el.textContent = text;
    }
}

var onDeviceReady = function () {
	Phonon.Navigator().start('home');
}

var isCordova = typeof window.cordova !== 'undefined' ? true : false;

if(isCordova) {
	document.addEventListener('deviceready', onDeviceReady, false);
} else {
	window.addEventListener('load', onDeviceReady, false);
}

Phonon.Navigator({
	defaultPage: 'home',
	templatePath: 'tpl',
	pageAnimations: true
});

/**
 * This page is synchronous
*/
Phonon.Navigator().on({page: 'home', template: 'home', asynchronous: false}, function(activity) {

	activity.onCreate(function(self, el, req) {
		window.parent.document.querySelector('.activity-info').innerHTML += 'home: onCreate<br />';
	});

	activity.onReady(function(self, el, req) {
		window.parent.document.querySelector('.activity-info').innerHTML += 'home: onReady<br />';
	});

	activity.onTransitionEnd(function() {
		window.parent.document.querySelector('.activity-info').innerHTML += 'home: onTransitionEnd<br />';
	});

	activity.onQuit(function(self) {
		window.parent.document.querySelector('.activity-info').innerHTML += 'home: onQuit<br />';
	});

	activity.onHidden(function(el) {
		window.parent.document.querySelector('.activity-info').innerHTML += 'home: onHidden<br />';
	});
});

/**
 * This page is asynchronous which means that you must
 * call runReady() inside the onCreate callback
 * and startTransition() inside the onReady callback manually after asynchronous tasks are done
*/
Phonon.Navigator().on({page: 'page-two', template: 'page-two', asynchronous: true}, function(activity) {

	var msg;
	var userAction = false;
	var handler = function(evt) {
		evt.preventDefault();

		userAction = true;
		write(msg,  'You can now leave this page if you want to');
	};

	activity.onCreate(function(self, el, req) {

		msg = el.querySelector('.msg');
		var els = el.querySelectorAll('.order, .cancel');
		els[0].addEventListener('click', handler);
		els[1].addEventListener('click', handler);

		window.parent.document.querySelector('.activity-info').innerHTML += 'page-two: onCreate<br />';

		// Asynchronous call of the onReady callback sample
		self.runReady();
	});

	activity.onReady(function(self, el, req) {
		window.parent.document.querySelector('.activity-info').innerHTML += 'page-two: onReady<br />';
		// OnReady task simulation : wait 1/4 second, then start the page transition
		setTimeout(function() {

			// get/display the parameter value
			var res = el.querySelector('.result');

	        write(res, req.myParam);
			self.startTransition();

		}, 250);
	});

	activity.onTransitionEnd(function() {
		window.parent.document.querySelector('.activity-info').innerHTML += 'page-two: onTransitionEnd<br />';
	});

	activity.onQuit(function(self) {
		window.parent.document.querySelector('.activity-info').innerHTML += 'page-two: onQuit<br />';
		if(userAction) {
			self.quit();
		} else {
			self.cancel();
			console.log('page-two: quit has been canceled');
			write(msg, 'Please order or cancel your pizza before going back.');
		}
	});

	activity.onHidden(function(el) {
		window.parent.document.querySelector('.activity-info').innerHTML += 'page-two: onHidden<br />';

		// Reset the text
		write(msg, '');
		userAction = false;
	});

}, 'page-two/:myParam');