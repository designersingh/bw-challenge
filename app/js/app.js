'use strict';

/* App Module */

var bwApp = angular.module('bwApp', [
  	'ngRoute','config','ngTextTruncate'
]);

bwApp.factory('scrollToElement', [function() {
    return function(scope, elem, attrs) {
        console.log(scope);
        var element = $(scope);
        var scrollAmount = $(element).offset().top;
        //console.log('Scroll amount is:'+scrollAmount);
        scrollAmount -= 83;
        //console.log('New Scroll amount is:'+scrollAmount);

        // Scroll
        $('html,body').animate({
                scrollTop: scrollAmount},
            'slow');
    };
}]);

