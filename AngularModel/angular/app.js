(function () {
    var app = angular.module("app", ["ngRoute"]);

    var config = function ($routeProvider) {
        $routeProvider
            .when("/home",
                { templateUrl: "/angular/views/home.html", controller: "HomeController" })
            .when("/services",
                { templateUrl: "/angular/views/services.html", controller: "ServicesController" })
            .when("/contact",
                { templateUrl: "/angular/views/contact.html", controller: "ContactController" })
            .otherwise(
                { redirectTo: "/home", controller: "HomeController" });
    };

    app.config(config);
}());