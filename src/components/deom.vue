<template>
    <div id="app">
    <form>
      <input type="text" placeholder="请输入用户名" name="shoujian" v-model="u.shouji">
      <input type="text" placeholder="请输入密码"   name="mima" v-model="u.mima">
      <button @click.prevent="tijiao()" style="border:none; outline:none">立即登录</button>
    </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      u: {}
    }
  },
  methods: {
    tijiao: function () {
      if (this.u.shouji === undefined || this.u.mima === undefined) {
        alert('请填写用户名或者密码')
        return false
      }
      axios.get('http://vue.yaoyiwangluo.com/wx_check_login_yonghu.asp', {
        params: {
          yhm: this.u.shouji,
          mm: this.u.mima
        }
      }).then(function (response) {
        console.log(response.data)
        if (response.data.zt === 'yes') {
          alert('dnegl')
        }
        if (response.data.zt === 'no') {
          alert('response.data.xinix')
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
