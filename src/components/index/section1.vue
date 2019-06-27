<template lang="html">
  <section class="section1">
    <h1 class="section1-title">{{title}}</h1>
    <ul class="section1-list">
      <li  class="section1-item-wrap" v-for="(k, index) in list" :key="k.id" @click="click(index)">
          <div  class="section1-item">
            <h1>{{k}}</h1> 
            <p v-if="index == 0">首页弹出消息通知：我是首页鸭</p>
            <p v-if="index == 1">分类页内容添加：我什么都不知道是首页通知我改的</p>
            <p v-if="index == 2">所有标题都变成：我们都变啦</p>
            <p v-if="index == 3">暂无</p>
          </div>        
      </li>
    </ul>
  </section>
</template>

<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', function (event) {
    console.log("section 1 收到消息: " + event.data);
    event.ports[0].postMessage("section 1 给出回应");
  });
}

export default {
  data() {
    return {
      list: [1, 2, 3, 4]
    }
  },
  methods: {
    click(index) {
      let data = null;
      if (index == 0) {
        data = {
          type: 0,
          from: 'index',
          message: '弹出消息通知'
        }
      }
      if (index == 1) {
        data = {
          type: 1,
          from: 'index',
          to: 'category',
          message: '我什么都不知道是首页通知我改的'
        }
      }
      if (index == 2 || index == 3) {
        data = {
          type: 2,
          from: 'index',
          to: 'all',
          message: '我们都变啦'
        }
      }

      this.send_message_to_sw(data)
    },
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
      return this.$store.state.sw.allMsg || "section";
    }
  }
}

</script>

<style lang="less" scoped>
.section1 {
  .section1-title {
    background-color: #ffffff;
    text-align: center;
    padding: 4vw 0;
  }
  .section1-item {
    height: 200px;
    background: #5fa75f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #fff;
    flex-direction: column;
    h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
  }

  .section1-list {
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    padding: 0 2vw 4vw 2vw;
    li {
      width: 50%;
      padding: 1vw;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
}
</style>
