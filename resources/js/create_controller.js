app.controller('createController', ['$http', 'userService', function ($http, userService) {

    var self = this;
    self.employee = {};
    $http.get(API + 'roles').then(function (response) {
        self.roles = response.data;
    });
    self.save = function () {
        console.log('save called');
        console.log(JSON.stringify(self.employee));
        userService.Create(self.employee);


    };

}]);