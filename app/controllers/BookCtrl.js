"use strict";

app.controller("BookCtrl", function($scope, GuideFactory){

	let printGuides = function() {
		GuideFactory.getGuides()
		.then( guides => {
			$scope.guides = guides.data.guides;
			console.log( '$scope',$scope );
		});
	};

	printGuides();

	$scope.newGuide = {
		title: 'Baltimore',
		type: 'A place'
	};
});