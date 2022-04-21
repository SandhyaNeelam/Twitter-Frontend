<template>
    <div>
        <ANavbar />
        <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="content">
          <input v-model="profileName" v-if="isUpdating" type="text">
        <p v-else> <strong> Name : {{name}} </strong>
        <button v-if="!isUpdating" @click="updateName"> edit &#128221;
        </button>
        </p>
        <button v-if="isUpdating" @click="submitName">Submit</button>
        <!-- <button v-else @click="submitName">Submit</button> -->
        <p> <strong> Email: {{email}} </strong> </p>
      </div>
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ANavbar from '~/components/ANavbar.vue'
    export default {
        components: {
            ANavbar
        },

        data() {
            return{
                profileName:'',
                isUpdating: false,
            }
        },
        computed: {
            ...mapState(['name', 'email']),
        },

        methods: {
            async updateProfile(id) {
                await this.$store.dispatch('updateProfile', id)
            },

            async submitName() {
                this.isUpdating = false;
                await this.$store.dispatch('updateProfile', this.profileName);
                await this.$store.commit('updateProfile', this.profileName);
            },
        async updateName() {
        this.isUpdating = true;
        this.profileName = this.name
        }
    }
}
</script>

<style scoped>
 .container {
    margin-top: 20px;
    text-align: center;
}
.title {
    text-decoration: underline;
}
</style>
