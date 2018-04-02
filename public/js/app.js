const app = angular.module("VideosApp", []);

app.controller("MainController", ["$http", function($http){
    // this.h1 = "Video Catalog";


    this.createForm = {};
    this.video = "";

    // Create
    this.createVideo = () => {
        $http({
            method:'POST',
            url: '/videos',
            data: this.createForm
        }).then(response => {
            this.videos.push(response.data);
            this.createForm = {};
        }, error => {
            console.error(error);
        }).catch(err => console.error('Catch: ', err));
    }

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
    this.getVideos();

    // Delete
    this.deleteVideo = (id) => {
        $http({
            method:'DELETE',
            url:'/videos/' + id
        }).then(response => {
            console.log(response.data); // add getVideos() to repopulate the index
            const removeByIndex = this.videos.findIndex(video =>
            video._id === id);
            this.videos.splice(removeByIndex, 1);
        }, error => {
            console.error(error);
        }).catch(err => console.error('Catch: ', err))
    }

    // Edit
    this.editVideo = (video) => {

        $http({
            method:'PUT',
            url: '/videos/' + video._id,
            data: {
                title: this.updatedTitle,
                category: this.updatedCategory,
                description: this.updatedDescription,
                url: this.updatedURL,
                thumb: this.updatedThumb
            }
        }).then(response => {
            this.getVideos();
        }, error => {
            console.error(error);
        }).catch(err => console.log('Catch', error))
    }


    // load on page load

}]);
