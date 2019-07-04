<template>
  <Form ref="qiaoForm" :model="form" :rules="rules" @keydown.enter.native="handleClick">
    <FormItem prop="userCount">
      <Input v-model="form.userCount" placeholder="请输入玩家人数">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="userNumber">
      <Input v-model="form.userNumber" placeholder="请输入您的当前位置">
        <span slot="prepend">
          <Icon :size="14" type="md-ionitron"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="firstNumber">
      <Input v-model="form.firstNumber" placeholder="请输入第一个玩家的数字">
        <span slot="prepend">
          <Icon :size="14" type="md-link"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleClick" type="primary" long>确认(下一回合)</Button>
      <Button @click="handleClear" type="primary" style="margin-top:20px" long>清空</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'qiaoForm',
  props: {
  },
  data () {
    const validateUserCount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('玩家人数不能为空'))
      }else if (! /^\d+$/.test(value)){
        callback(new Error('请正确输入数字'))
      }else if (value < 2){
        callback(new Error('请输入大于2的数字'))
      }else{
        callback()
      }
    };
    const validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('玩家当前位置不能为空'));
      }else if (!(/^\d+$/.test(value)) || value <=0){
        callback(new Error('请输入数字'))
      }else{
        if (this.form.userCount<value ){
          callback(new Error('请正确输入,不能大于总玩家人数'))
        }
        callback();
      }
    };
    const validateFirstNumber = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请正确输入，不能为空'))
      }else if (! /^\d+$/.test(value)){
        callback(new Error('请正确输入数字'))
      }else if (value >= 10 || value <=0 ){
        callback(new Error('请输入1-9之间的数字'))
      }else{
        callback();
      }
    };
    return {
      form: {
        userCount: null,
        userNumber: null,
        firstNumber: null,
      },
      round: 1,
      buttonTip: '第一回合',
      rules: {
        userCount: [
          {validator: validateUserCount, trigger: 'blur'}
        ],
        userNumber: [
          {validator: validateUser, trigger: 'blur'}
        ],
        firstNumber: [
          {validator: validateFirstNumber, trigger: 'blur'}
        ]
      }
    }
  },
  computed: {
    userData () {
      var form = this.form
      return parseInt(form.firstNumber)+parseInt(form.userNumber-1)+parseInt(form.userCount*(this.round-1))
    }
  },
  methods: {
    handleClick () {
      this.$refs.qiaoForm.validate((valid) => {
        if (valid) {
          this.$emit('nextRound', {
            count: this.round,
            tips: this.isSeven(this.userData)
          })
          this.round += 1;
        }
      })
    },
    isSeven (num) {
      if (parseInt(num) % 7 === 0 ) {
        return '拍桌子'
      }else if (num.toString().indexOf('7')>=0){
        return '拍桌子'
      }else{
        return num
      }
    },
    handleClear () {
      this.round = 1
      this.$emit('clear')
    }
  }
}
</script>
