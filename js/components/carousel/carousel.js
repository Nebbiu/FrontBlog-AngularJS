((app) => {
    'use strict'
    app.component('mycarousel', {
        templateUrl: 'js/components/carousel/carousel.html',
        controller: ['postFactory', function(postFactory) {
              this.myInterval = 3000;
              this.slides = postFactory.posts;
        }]
    })
})(angular.module('app.carousel'))
