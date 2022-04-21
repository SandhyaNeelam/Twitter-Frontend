<template>
    <div class="singlepost">
        <h2> <strong>Posts</strong> </h2>
        <input v-model="postText " v-if="isUpdating" type="text">
        <p v-else>{{post.title}}</p>
        <div class="btns" v-if="post.user_id == user_id">
            <button v-if="!isUpdating" @click="updatePost" class="button1">Update</button>
            <button v-if="!isUpdating" @click="deletePost(post.id)" class="button2">Delete</button>
            <button v-else @click="submitPost" class="button3">Submit</button>
        </div>
        <hr> <hr>

        <div class="comments">
            <h2> <strong> Comments </strong></h2>
            <br>
            <div class="commentdelete" v-for="(comment, i) in comments" :key ="i"> {{comment.text}}
                <button v-if="comment.user_id == user_id" @click="deleteComment(comment.id)" class="button4">Delete </button>
            </div>

            <div class="input">
                <label for="">Type Here </label>
                <input type="text" v-model="text"> <br>
                <button @click="createComment" class= "button5">Comment</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        props: {
            postId: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
            postText: '',
            isUpdating: false,
            text: '',
            }
        },
        computed: {
            ...mapState(['post','user_id', 'comments'])
        },
        async created() {
            await this.$store.dispatch('getPost')
            await this.$store.dispatch('getComments')
        },

        methods: {
            async deletePost(id){
                await this.$store.dispatch('deletePost', id)
                this.$router.push('/');
            },
             updatePost(){
            this.isUpdating = true;
             this.postText = this.post.title
            },

            submitPost() {
            this.isUpdating = false;
            this.$store.dispatch('updatePost', this.postText);
            this.$store.commit('updatePost', this.postText);
            },

            async createComment() {
                await this.$store.dispatch('createComment', this.text)
                await this.$store.dispatch('getComments');
                this.text = '';
            },
            async deleteComment(id) {
                await this.$store.dispatch('deleteComment', id)
                await this.$store.dispatch('getComments');
            },


     }

    }
</script>

<style scoped>
.button1 {
  background-color: rgb(231, 194, 10);
  cursor: pointer;
  border-radius: 16px;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}
.button2 {
  background-color: rgba(236, 15, 15, 0.902);
  cursor: pointer;
  border-radius: 16px;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}

.button3{
  background-color: rgba(11, 240, 187, 0.902);
  cursor: pointer;
  border-radius: 16px;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}
.singlepost{
    text-align: center;
}
.input{
    width: 40%;
}
.button4 {
  background-color: rgb(153, 0, 255);
  cursor: pointer;
  border-radius: 16px;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}
.button5 {
  background-color: rgba(236, 15, 15, 0.902);
  cursor: pointer;
  border-radius: 16px;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}

</style>