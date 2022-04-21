
const state = () => ({
    token: null,
    posts: [],
    name: null,
    email: null,
    id: null,
    user_id: null,
    post: [],
    postId: null,
    comments: []
})

const getters = {}

const mutations = {
    setToken(state, data) {
        state.token = data.token;
        state.name = data.name,
        state.email = data.email,
        state.user_id = data.id

    },
    setList(state, data) {
        state.posts = data
    },
    updateProfile(state, data) {
        state.name = data
    },
    setPost(state, data){
        state.post = data
    },
    setPostId(state, data){
        state.postId = data
    },
    updatePost(state, data){
        state.post.title = data
    },
    setComment(state, data) {
        state.comments = data
    }


}

const actions = {
    async login({commit}, data) {
        const res = await this.$axios.post('http://localhost:5194/api/user/login', {
            email : data.email,
            password : data.password
        }).then(res => {
            console.log(res.data);
            commit('setToken', res.data)
         this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token)
            this.$router.push('/posts');
        })
    },

    async register({commit}, data) {
        const res = await this. $axios.post('http://localhost:5194/api/user/Register', {
            name: data.name,
            email : data.email,
            password : data.password
        }).then(res => {
            console.log(res.data);
        })
    },

    async getPosts({commit, state}) {
       const res = await this.$axios.get('http://localhost:5194/api/post')
       commit('setList', res.data)
    },

    async addPost({commit}, data) {
        console.log(data);
      const res = await this.$axios.post('http://localhost:5194/api/post', {title: data})
    },

    async updateProfile({state}, data) {
        const res = await this.$axios.put('http://localhost:5194/api/user',  {
            name: data})
    },

    async deletePost({state}, data) {
        const res = await this.$axios.delete('http://localhost:5194/api/post/' +data);
        console.log(res.data);
    },

    async updatePost({state}, data) {
        const res = await this.$axios.put('http://localhost:5194/api/post/' +state.post.id, {title: data});
        console.log(res.data);
    },

    async getPost({commit, state}, data) {
        const res = await this.$axios.get('http://localhost:5194/api/post/'+state.postId)
       commit('setPost', res.data)
    },
    async getComments({commit, state}, data) {
        const res = await this.$axios.get('http://localhost:5194/api/comment?post_id=' +state.post.id);
        commit('setComment', res.data);
    },

    async createComment({commit, state},data) {
        const res = await this.$axios.post('http://localhost:5194/api/comment?post_id=' +state.post.id, {text: data});
    },

    async deleteComment({commit, state},data) {
        const res = await this.$axios.delete('http://localhost:5194/api/comment/' +data);
        console.log(res.data);
    },




}




export default {
    state,
    getters,
    mutations,
    actions
}