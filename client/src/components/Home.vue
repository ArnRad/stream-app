<template>
  <div class="container">
    <div>
      <h1> {{ text }} </h1>
    </div>
    <div>
      <h1
        v-if="videoId.length === 0"
        class="display-2"
        style="color:white; margin-top: 50px"
      >
        Stream is starting soon!
      </h1>
      <template>
        <youtube-media
          v-if="videoId.length > 0"
          :video-id="videoId"
          player-width="855px"
          player-height="480"
          style="margin-top: 50px"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed'
import axios from 'axios'

export default {
  data () {
    return {
      videoId: '',
      startTime: '',
      text: 'Welcome!'
    }
  },
  created () {
    setInterval(() => {
      axios.get('http://localhost:5000/api/stream').then(res => {
        if (res.data.data.length > 0) {
          this.videoId = getIdFromURL(res.data.data[0].stream_url)
          this.text = 'Stream is live!'
        } else {
          this.videoId = ''
          this.text = 'Welcome!'
        }
      })
    }, 5000)
  }
}

</script>
<style scoped>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
</style>
