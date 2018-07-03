<template>

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
</template>

<script>
    export default {
        props:[ 'post' ] ,
        methods:{
            deletePost: function () {

                let uri = 'http://localhost:8000/post/'+ this.post.id ;
                this.axios.delete( uri , this.post ).then( (response ) =>{
                    console.log("after updated: " +response.data) ;
                    console.log("status: " +status.data) ;
                    console.log('post deleted successfully' );
                    this.$toaster.info('Your Post have already Deleted.');

                });


            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>



