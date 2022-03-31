<template>
  <div class="container">
    <h1 class="display-2" style="color:white; margin-top: 50px">Stream setup</h1>
    <form
      style="width: 50%"
      @submit="startStream"
    >
        <div class="form-group">
            <input v-model="url" type="text" class="form-control" id="urlAddress" placeholder="URL">
        </div>
        <button style="margin-top: 10px; margin-bottom: 10px" type="submit" class="btn btn-primary">Load stream!</button>
    </form>
    <h1 v-if="streamUp" class="display-2" style="color:white; margin-top: 50px">Stream started!</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      url: '',
      streamUp: false
    }
  },
  methods: {
    startStream (e) {
      e.preventDefault()
      axios.post('http://localhost:5000/api/stream-up', { stream: this.url }).then(res => {
        this.streamUp = true
      })
    }
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
