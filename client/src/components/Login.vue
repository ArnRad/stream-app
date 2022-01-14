<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Login to system!</h3>
            <hr class="my-4">

            <div class="form-outline mb-4">
              <input type="text" id="username" class="form-control form-control-lg" placeholder='Username' v-model="username" />
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="password" class="form-control form-control-lg" placeholder='Password' v-model="password" />
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit" @click="login">Login</button>

            <hr class="my-4" v-if="msg">
            <p class="lead" v-if="msg">{{ msg }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AuthService from '@/services/AuthService.js'

export default {
  data () {
    return {
      username: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    async login () {
      try {
        const credentials = {
          username: this.username,
          password: this.password
        }
        const response = await AuthService.login(credentials)
        this.msg = response.msg

        const token = response.token
        const user = response.user
        console.log(this.$store)
        this.$store.dispatch('login', { token, user })

        this.$router.push('/')
      } catch (error) {
        this.msg = error.response.data.msg
      }
    }
  }
}
</script>
