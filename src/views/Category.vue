<template lang="html">
  <div class="wrap">
    <v-header class="header">
      <h1 slot="title">{{title}}</h1>  
    </v-header>
    <div class="content-wrap">
      <p class="content">{{msg}}</p>
      <textarea  v-model="inputText"></textarea>
      <p class="tips">Tips:  同时打开两个窗口，输入的内容会同步变化哦~</p>
    </div>   
    <v-footer/>
  </div>
</template>
<script>

import Header from '@/common/_header.vue'
import Footer from '@/common/_footer.vue'

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer
  },
  data() {
    return {
      address: ''
    }
  },
  created() {

  },
  methods: {
    send_message_to_sw(msg) {
      return new Promise(function (resolve, reject) {
        // Create a Message Channel
        var msg_chan = new MessageChannel();
        // Handler for recieving message reply from service worker
        msg_chan.port1.onmessage = function (event) {
          if (event.data.error) {
            reject(event.data.error);
          } else {
            resolve(event.data);
          }
        };
        // Send message to service worker along with port for reply
        navigator.serviceWorker.controller.postMessage(msg, [msg_chan.port2]);
      });
    }

  },
  computed: {
    title() {
      return this.$store.state.sw.allMsg || "商品分类";
    },
    msg() {
      return this.$store.state.sw.categoryMsg;
    },
    inputText: {
      get: function () {
        this.address = this.$store.state.sw.categoryMsg;
        return this.address
      },
      set: function (value) {
        this.address = value;
        let data = {
          type: 1,
          from: 'index',
          to: 'category',
          message: this.address
        }
        this.send_message_to_sw(data)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  .content-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    justify-content: center;
  }
  .tips {
    margin: 0 auto;
    color: #ffaa00;
    font-size: 12px;
    margin-top: 10px;
  }
  .content {
    text-align: center;
    color: #5fa75f;
    margin: 20px 0px;
  }
  .view {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  textarea {
    width: 60%;
    height: 400px;
    margin-top: 20px;
    margin: 0 auto;
  }
}
</style>
