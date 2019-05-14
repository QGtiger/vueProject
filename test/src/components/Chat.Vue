<template>
  <div class="chat container">
    <h1>{{ msg }}</h1>
    <h2>聊天室</h2>
    <div class="input-group flex-nowrap mt-3 mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="addon-wrapping">Your Username</span>
      </div>
      <input type="text" v-model="username" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
    </div>
    <div class="input-group mb-5">
      <input type="text" class="form-control" v-model="message" placeholder="Please input your message which you want to send" aria-label="Recipient's username" aria-describedby="button-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="handleSendMessage" id="button-addon2">发送讯息</button>
      </div>
    </div>
    <div class="media my-3" v-for="item in messages">
      <img v-if="item.username!==username" src="http://lorempixel.com/100/100/sports/" class="align-self-center mr-3" alt="...">
      <div class="media-body">
        <h5 class="mt-0">{{ item.username }}</h5>
        <p>{{ item.message }}</p>
      </div>
      <img v-if="item.username===username" src="http://lorempixel.com/100/100/sports/" class="align-self-center mr-3" alt="...">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      msg: 'Welcome to Your Chat Room',
      username: '',
      message: '',
      messages: [
        {
          username: 'Casper',
          message: 'Hello I\'Casper'
        },
        {
          username: 'Kabol',
          message: 'Hello I\'m Kabol'
        }
      ]
    }
  },
  methods: {
    handleSendMessage () {
      var _this = this;
      if(_this.username.trim().length>0){
        this.messages.unshift({
          username: _this.username,
          message: _this.message
        })
        _this.message = '';
      }else{
        alert('请输入你的名字')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
