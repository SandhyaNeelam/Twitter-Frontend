<template>
  <section class="section">
      <RNavbar />
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Register!</h2>

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="username"
                  v-model="name"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
                  required
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
                  required
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Register</button>
            </div>
          </form>


        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RNavbar from '~/components/RNavbar.vue'
export default {
  components: {
      RNavbar

  },

  data() {
    return {
      name: '',
      email: '',
      password: '',

    }
  },

  methods: {
    async register() {
        await this.$store.dispatch('register', {
           name: this.name,
          email: this.email,
          password: this.password
        })
    }
  }
}
</script>