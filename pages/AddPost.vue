<template>
    <div>
        <ANavbar />
  <div id="todo" class="header">
        <h2>Create Post &#128397;</h2>
        <input class="text" type="text"  placeholder="whats new!" v-model="post" />
        <button  @click="addPost(post)" class="submit">Submit</button>
  </div>
    </div>
</template>

<script>
import ANavbar from '~/components/ANavbar.vue'
    export default {
        data() {
            return {
                post: '',
            }
        },

        methods: {
            async addPost(post) {
                // console.log(post)
                await this.$store.dispatch('addPost', post);
                 this.$router.push('/posts');

            }
        },
        components:{
            ANavbar,
        }
    }
</script>

<style scoped>
h2{
    text-align: center;
    padding: 20px;
    color: black;
}
.header{
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 20px;
    align-items: center;
    background-color: #edf3f1;
    padding: 5px 40px;
    color: white;
    text-align: center;
    margin-left: 400px;
    margin-top: 50px;
}
.submit{
 background-color: rgba(11, 152, 240, 0.904);
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

.text{
    border: solid rgb(80, 179, 255);
    height: 50px;
    width: 20em;
    font-style: italic;
}
</style>