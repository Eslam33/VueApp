<template>
    <div >




        <Suggest :all_posts="all_posts" > </Suggest>

        <br/>
        <Post :all_posts="all_posts" > </Post>

        <br/>

    </div>

</template>

<script>
    export default {
        ///
        data: function () {
            return { all_posts: [] }
        },
        created: function(){

            let uri = 'http://localhost:8000/post';

            this.axios.get( uri ).then((response) => {

                console.log('response2: '+ response.data );
                console.log('status2: '+ response.status );

                return this.all_posts = response.data;
                console.log('App all posts: ' + this.all_posts.length());
            });

        },

        //
        mounted() {
            console.log('Component mounted.');


        }
    }
</script>
