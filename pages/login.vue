<template>
  <section class="section">
      <navbar />
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Login</h2>

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar },


  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    async login() {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
    }
  }

}
</script>
