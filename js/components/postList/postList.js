((app) => {
    'use strict'
    app.component('postList', {
        templateUrl: 'js/components/postList/postList.html',
        controller: ['$http', 'postFactory', function($http, postFactory) {

            angular.extend(this, {
                posts: [],
                $onInit() {
                    this.posts = postFactory.posts
                },
                savePost() {
                    this.edit = false;
                    if (!this.postSelected.createdAt) {

                        this.postSelected.createdAt = Date.now();
                        this.posts.unshift(this.postSelected);
                        this.postSelected = null;
                    } else {

                        this.posts.forEach((post) => {
                            if (post.createdAt === this.postSelected.createdAt) {
                                post = this.postSelected
                                return
                            }
                        })
                    }
                }
            })
        }]

    })
})(angular.module('app.postList'))
