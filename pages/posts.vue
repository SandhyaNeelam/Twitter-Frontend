<template>
  <div>
    <ANavbar />
    <h2>All Posts</h2>
    <ul>
      <li class="post" v-for="(list, i) in $store.state.posts" :key="i">
        <div @click="postpage(list.id)" > {{ list.title }}  <span class="nav">&#9989;</span>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
import ANavbar from "~/components/ANavbar.vue";
export default {
  created() {
    this.$store.dispatch("getPosts");
    console.log("posts hello");
  },
  components: {
    ANavbar,
  },
  methods: {
    postpage(id) {
      console.log(id);
      this.$router.push('/postpage/' +id)
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 2em;
}
ul {
  margin-left: 25%;
  padding-left: 0;
  width: 600px;
  background: rgb(6, 215, 156);
  font-size: 18px;
  padding: 12px 8px 12px 40px;

}
.nav{
  float: right;
  margin-right: 50px;
}

li a:hover {
  background-color: #555;
  color: white;
}



</style>
