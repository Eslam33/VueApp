<template>
<div>


    <div class="panel panel-primary" v-for="ref in allPosts">
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

                    </div>
                </li>
            </ul>
        </div><!--footer -->




    </div><!--panel - primary -->

    <!-- Edit Modal-->
    <EditPost
            :post="single_post" >
    </EditPost>

    <!-- Delete Modal-->
    <DeletePost
            :post="single_post">

    </DeletePost>


</div>

</template>



<script>
    export default {
        props:[ 'all_posts' ] ,
        data: function () {
            return { posts: [] , single_post: '' }
        },
        created: function(){
            //console.log('Post all_posts: ' + this.all_posts.length);
           return  this.posts = this.all_posts;
           //  console.log('all posts');
           //  let uri = 'http://localhost:8000/post';
           //
           //  this.axios.get( uri ).then((response) => {
           //
           //      console.log('response2: '+ response.data );
           //      console.log('status2: '+ response.status );
           //
           //      return this.posts = response.data;

            //});

        },
        methods:{
          say: function (e) {
              this.single_post = e;
              console.log('single_post: ' + this.single_post);
          }
        },
        computed: {
            allPosts: function(){
                  //  console.log('EEEEEEEE: ' + this.all_posts );
                //if(this.posts.length) {
                    return this.all_posts;
                  //  return this.posts;
                //}
            }
        },
        mounted() {
            console.log('Component mounted.');
            //console.log('All Posts22: ' + this.posts.length );


        }
    }
</script>



