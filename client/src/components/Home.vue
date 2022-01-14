<template>
  <div class="container">
    <h1 class="display-2" style="color:white">Welcome {{ username }} !</h1>
    <div class="bg-dark text-white" style="height: 400px; width: 50%"></div>
    <p style="color:white">{{ secretMessage }}</p>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService.js'

export default {
  data () {
    return {
      secretMessage: '',
      username: ''
    }
  },
  async created () {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login')
    }

    this.username = this.$store.getters.getUser.username

    this.secretMessage = await AuthService.getSecretContent()
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
