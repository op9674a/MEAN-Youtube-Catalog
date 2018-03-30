const app = angular.module("VideosApp", []);

app.controller("MainController", ["$http", function($http){
    this.h1 = "video catalog";
}])
