<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>lightfish</h2>
    <div class="content">
      <v-card></v-card>
    </div>
  </div>
</template>

<script>
import vCard from '@/components/QiaoCard'
export default {
  components: {vCard},
  data () {
    return {
      msg: 'Welcome to Knock Seven Auxiliary Program'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.content{
  width:500px;
  margin: 20px auto
}
</style>
