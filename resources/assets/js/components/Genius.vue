<template>
    <div >


        <!-- add post -->
        <div class="panel panel-default">
            <div class="panel-heading"><h4> Suggest Something </h4></div>

            <div class="panel-body">

                <form  v-on:submit.prevent = "createPost">

                    <textarea class="form-control" v-model="newPost.content_text" placeholder="Write something..." rows="7"></textarea>
                    <br>
                    <input class="form-control" v-model="newPost.topic" placeholder="Write topic...">
                    <br>
                    <button type="submit"  class="btn btn-primary" id="post_button">Create Post</button>
                </form>


            </div>
        </div>
        <br/>
        <!-- -Posts -->

        <div class="panel panel-primary" v-for="ref in posts">
            <div class="panel-heading">Public Post:  Posted at @{{ref.topic}}</div>
            <div class="panel-body">
                <div class="media">
                    <div class="media-left">
                        <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" class="media-object" style="width:45px">
                    </div>
                    <div class="media-body">

                        <button type="button" v-on:click="say( ref)"  class="btn btn-danger" id="delete_button" data-toggle="modal" data-target="#deletetModal">Delete</button>

                        <button type="button"  v-on:click="say( ref)" class="btn btn-warning" id="edit_button" data-toggle="modal" data-target="#editModal" >Edit</button>

                        <h4 class="media-heading">John Doe <small><i> {{ref.created_at }}</i></small></h4>
                        <p>
                            {{ ref.content_text }}
                        </p>
                    </div>
                </div>
                <form >
                    <button type="button" class="btn btn-link">Like <span class="badge">14</span></button>
                    <button type="button" class="btn btn-link">share <span class="badge">14</span></button>

                </form>

            </div>
            <div class="panel-footer">
                <ul class="media-list">
                    <li > <input type="text" class="form-control" placeholder="comment" ></li>
                    <li class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="https://www.w3schools.com/bootstrap/img_avatar2.png" alt="..." style="width:45px">
                            </a>
                        </div>
                        <div class="media-body">
                            <button type="button" class="btn btn-danger" id="delete_but">Delete</button>

                            <button type="button" class="btn btn-warning" id="edit_but">Edit</button>
                            <h4 class="media-heading"></h4>
                            <p > comment .........</p>
                            <input type="text" class="form-control" placeholder=" Reply" />

                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--// end posts -->

        <!-- Edit Modal-->
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel">Update Post</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="updateform" >
                            <div class="form-group">

                                <input type="text" class="form-control" id="topic-name"   v-model="single_post.topic" placeholder="Write Topic">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id="content-text" v-model="single_post.content_text" placeholder="Write something"></textarea>
                            </div>
                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button"  v-on:click="updatePost" data-dismiss="modal" class="btn btn-warning">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Modal-->

        <div class="modal fade" id="deletetModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Delete Post</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Are you Sure you want to delete this post ? </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="deletePost" class="btn btn-danger" data-dismiss="modal">Delete</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
            <!-- // end delete moodal //-->
        <br/>

    </div>

</template>

<script>
    export default {

        data: function () {
            return { posts: [] , single_post: '' , newPost: {topic: '', content_text: ''}}
        },
        created: function(){
            // get all posts from database
            let uri = 'http://localhost:8000/post';
            this.axios.get( uri ).then((response) => {
                console.log('response2: '+ response.data );
                console.log('status2: '+ response.status );
                return this.posts = response.data;
            });
        },
        watch:{
            posts: function(){
                if(this.posts.length) {
                    return this.posts;
                }
            },
            single_post: function(){
                if(this.single_post.length) {
                    return this.single_post;
                }
            },
        },
        methods:{
            // pass refrence of post that you fire it
            say: function (e) {
                this.single_post = e;
                console.log('single_post: ' + this.single_post);
            },
            // update post
            updatePost: function () {

                let uri = 'http://localhost:8000/post/'+ this.single_post.id ;
                this.axios.patch( uri , this.single_post ).then( (response ) =>{
                    console.log("after updated: " +response.data) ;
                    console.log("status: " +status.data) ;
                    console.log('post updated successfully' );
                    this.$toaster.warning('Your Post have already Updated.');
                });

            },
            // delete post
            deletePost: function () {

                let uri = 'http://localhost:8000/post/'+ this.single_post.id ;
                this.axios.delete( uri , this.single_post ).then( (response ) =>{
                    console.log("after updated: " +response.data) ;
                    console.log("status: " +status.data) ;

                    this.posts.splice( this.posts.indexOf(this.single_post), 1);

                    console.log('post deleted successfully' );
                    this.$toaster.info('Your Post have already Deleted.');

                });


            },
            // create post
            createPost: function() {

                let uri = 'http://localhost:8000/post/';

                this.axios.post(uri, this.newPost).then((response) => {
                    console.log('response: '+ response.data );
                    console.log('status: '+ response.status );



                    this.newPost.topic = '' ;
                    this.newPost.content_text = '' ;
                    this.$toaster.success('Your Post have already created.');
                });
                //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                // this.posts.push( this.newPost);
                //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                // get all posts from database
                 uri = 'http://localhost:8000/post';
                this.axios.get( uri ).then((response) => {
                    console.log('response2: '+ response.data );
                    console.log('status2: '+ response.status );
                    return this.posts = response.data;
                });
                //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            }

        },
        mounted() {
            console.log('Component mounted.');


        }
    }
</script>
