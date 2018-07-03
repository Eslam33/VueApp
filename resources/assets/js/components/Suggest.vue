<template>


    <div class="panel panel-default">
        <div class="panel-heading"><h4> Suggest Something </h4></div>

        <div class="panel-body">

            <form  v-on:submit.prevent = "createPost">

                <textarea class="form-control" v-model="post.content_text" placeholder="Write something..." rows="7"></textarea>
                <br>
                <input class="form-control" v-model="post.topic" placeholder="Write topic...">
                <br>
                <button type="submit"  class="btn btn-primary" id="post_button">Create Post</button>
            </form>


        </div>
    </div>
</template>
<script>
    export default {
        props:[ 'all_posts' ] ,
        data: function () {
            return { post: {topic: '', content_text: ''}  }
        },
        methods: {
            createPost: function() {
                // console.log('topic: '+ this.post.topic );
                // console.log('content: '+ this.post.content_text );
                // console.log('post: ' + this.post );

                let uri = 'http://localhost:8000/post/';

                this.axios.post(uri, this.post).then((response) => {

                    console.log('response: '+ response.data );
                    console.log('status: '+ response.status );

                    this.post.topic = '' ;
                    this.post.content_text = '' ;

                   // this.koktel.push(this.post) ;

                    this.$toaster.success('Your Post have already created.');

                });
            }
        },
        mounted() {
            console.log('Component mounted.');

        }
    }
</script>
