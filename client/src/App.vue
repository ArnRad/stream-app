<template>
  <div class="vue-tempalte main">
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" target="_blank">
           Stream Application
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link v-if="!$store.getters.isLoggedIn" class="btn btn-outline-primary" to="/login">Log in</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!$store.getters.isLoggedIn" class="btn btn-outline-primary" to="/sign-up">Sign up</router-link>
          </li>
          <li class="nav-item">
            <button v-if="$store.getters.isLoggedIn" class="btn btn-outline-primary" @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </nav>

    <div id="app" class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #6a11cb;
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
  min-height: 100vh;
}

body {
  overflow: hidden;
}
</style>
