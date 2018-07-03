<template>
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

                            <input type="text" class="form-control" id="topic-name"   v-model="post.topic" placeholder="Write Topic">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="content-text" v-model="post.content_text" placeholder="Write something"></textarea>
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
</template>
<script>
    export default {
        props:[ 'post' ] ,

        methods: {
            updatePost: function () {

                let uri = 'http://localhost:8000/post/'+ this.post.id ;
                this.axios.patch( uri , this.post ).then( (response ) =>{
                   console.log("after updated: " +response.data) ;
                    console.log("status: " +status.data) ;
                    console.log('post updated successfully' );
                    this.$toaster.warning('Your Post have already Updated.');
                });


            }
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>




