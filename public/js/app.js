const app = angular.module("VideosApp", []);

app.controller("MainController", ["$http", function($http){
    // this.h1 = "Video Catalog";

    this.videos = [];
    this.createForm = {};

    // Create
    this.createVideo = () => {
        $http({
            method:'POST',
            url: '/videos',
            data: {
                title: this.title,
                category: this.category,
                description: this.description,
                url: this.url
            }
        }).then(response => {
            console.log(response.data);
        }, error => {
            console.error(error);
        }).catch(err => console.error('Catch: ', err));
    }

    // Get
    this.getVideos = () => {
        $http({
            method:'GET',
            url: '/videos'
        }).then(response => {
            this.videos = response.data;
        },error => {
            console.error(error);
        }).catch(err =>console.error('Catch: ', err))
    };

    // Delete
    // this.deleteVideo = () => {
    //     $http({
    //         method:'DELETE',
    //         url:'/videos/' + video._id
    //     }).then(response => {
    //         console.log(response.data); // add getVideos() to repopulate the index
    //     }, error => {
    //         console.error(error);
    //     }).catch(err => console.error('Catch: ', err))
    // }

    // Edit
    // this.editVideo = () => {
    //     $http({
    //         method:'PUT',
    //         url: '/videos/' + video._id
    //         data: {
    //             title: this.updatedTitle,
    //             category: this.updatedCategory,
    //             description: this.updatedDescription,
    //             url: this.updatedUrl
    //         }
    //     }).then(response => {
    //         console.log(response.data.updated);
    //     }, error => {
    //         console.log(error);
    //     }).catch(err => console.log('Catch', error))
    // }

    // load on page load
    this.getVideos();
}]);
