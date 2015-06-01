'use strict';

/**
 * @ngdoc function
 * @name cardsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardsApp
 */
angular.module('cardsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.cards = [{
    	title: 'Card A'
    },{
    	title: 'Card B'
    }
    ];



    // $scope.initSortable = function(){
    // 	$(function(){
    // 		$scope.sortable = $('.card-deck').sortable({
		  //   	items: '.card-container'
		  //   });
    // 	});
    // };

    // $scope.initSortable();

    
  })
	.directive('mySortable', function($compile) {
	    var dragSrcEl = null;

	    return {
	        restrict: 'A',
	        link: function(scope, elm, attrs) {
	            console.log('heyyyyyyyyyyyy', attrs);
	            console.log(elm);

	            var container = elm;

	            elm.find('.config-activate').on('click', function(e){
	            	e.preventDefault();
	            	alert('hi')
	            	elm.addClass('activate');
	            	elm.removeAttr('draggable');
	            })

	            elm.find('.config-return').on('click', function(e){
	            	e.preventDefault();
	            	elm.removeClass('activate');
	            	elm.attr('draggable', true);
	            })


	      //       elm.sortable({
			    // 	items: '.card-container'
			    // });

	            elm.bind('click', function(){
	            	console.log('cliiiiiiiiiiiick');
	            });

	            elm.bind('dragstart', function(e){
	            	console.log('dragstart');
	            	// container.removeClass('draggable');
	            	this.style.opacity = '0.4';

					dragSrcEl = this;

					var orig = e.originalEvent;

					orig.dataTransfer.effectAllowed = 'move';
					orig.dataTransfer.setData('text/html', this.innerHTML);
	            });

	            elm.bind('dragenter', function(){
	            	console.log('dragenter');
	            	elm.addClass('over');
	            });

	            elm.bind('dragover', function(e){
	            	console.log('dragover');
	            	if (e.preventDefault) {
						e.preventDefault(); // Necessary. Allows us to drop.
					}

					var orig = e.originalEvent;

					orig.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

					return false;
	            });

	            elm.bind('dragleave', function(){
	            	console.log('dragleave');
	            	elm.removeClass('over');
	            });

	            elm.bind('dragend', function(){
	            	console.log('dragend');
	            	$('.card-container').removeClass('over');
	            	this.style.opacity = '1';
	            });

	            // $(elm.parent()[0]).bind('drop', function(e){
	            elm.bind('drop', function(e){
	            	console.log('drop');

	            	// this/e.target is current target element.

	            	if (e.stopPropagation) {
	            	  e.stopPropagation(); // Stops some browsers from redirecting.
	            	}

	            	var orig = e.originalEvent;

	            	// Don't do anything if dropping the same column we're dragging.
	            	if (dragSrcEl != this) {
	            	  // Set the source column's HTML to the HTML of the column we dropped on.
	            	  dragSrcEl.innerHTML = this.innerHTML;
	            	  this.innerHTML = orig.dataTransfer.getData('text/html');
	            	}

	            	elm.removeClass('over');

	            	// $compile(elm)(scope);

	            	return false;

	            });
        }
    };
});
