<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign up new system user!</h3>
            <hr class="my-4">

            <div class="form-outline mb-4">
              <input type="text" id="username" class="form-control form-control-lg" placeholder='Username' v-model="username" />
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="password" class="form-control form-control-lg" placeholder='Password' v-model="password" />
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="password-repeat" class="form-control form-control-lg" placeholder='Password (repeat)' v-model="password_repeat" />
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit" @click="signUp">Sign Up</button>

            <hr class="my-4" v-if="msg">
            <p class="lead" v-if="msg">{{ msg }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AuthService from '../services/AuthService.js'

export default {
  data () {
    return {
      username: '',
      password: '',
      password_repeat: '',
      msg: ''
    }
  },
  methods: {
    async signUp () {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
          password_repeat: this.password_repeat
        }
        const response = await AuthService.signUp(credentials)
        this.msg = response.msg
        this.username = ''
        this.password = ''
        this.password_repeat = ''
      } catch (error) {
        this.msg = error.response.data.msg
      }
    }
  }
}
</script>
