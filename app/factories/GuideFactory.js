"use strict";

app.factory("GuideFactory", function ($http, $q) {

	let getGuides = function() {
		return $q( (resolve, reject) => {
			$http.get('data/guides.json')
			.then( response => resolve(response) )
			.catch( error => reject(error) );
		});
	};
	return {getGuides};
});