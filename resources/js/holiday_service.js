/**
 * 
 */
app.factory('holidayService',['$resource', function ($resource) {
	var URI='http://52.221.151.239/holidays:id';
   return $resource(
            URI, 
            {id: '@id'},
            {
                update: {
                      method: 'PUT' // To send the HTTP Put request when calling this custom update method.
                }
                 
            }
    );
	

}]);