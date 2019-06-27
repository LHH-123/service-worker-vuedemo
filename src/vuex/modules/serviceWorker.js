function subscribeUser(swReg) {
  const applicationServerPublicKey =
    "BBlY_5OeDkp2zl_Hx9jFxymKyK4kQKZdzoCoe0L5RqpiV2eK0t4zx-d3JPHlISZ0P1nQdSZsxuA5SRlDB0MZWLw";
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swReg.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(function(subscription) {
      console.log(JSON.stringify(subscription));
    })
    .catch(function(err) {
      console.log("订阅失败: ", err);
    });
}

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const state = {
  indexMsg: "",
  categoryMsg: "",
  carMsg: "",
  userMsg: "",
  allMsg: ""
};

const mutations = {
  changeIndex(state, res) {
    state.indexMsg = res;
  },
  changeCategory(state, res) {
    state.categoryMsg = res;
  },
  changeCar(state, res) {
    state.carMsg = res;
  },
  changeUser(state, res) {
    state.userMsg = res;
  },
  changeAll(state, res) {
    state.allMsg = res;
  }
};

const actions = {
  onMessage({ state, commit }, data) {
    if (data.to == "category") {
      console.log("category收到消息" + data);
      commit("changeCategory", data.message);
    }
    if (data.to == "all") {
      commit("changeAll", data.message);
    }
  },
  init({ state, dispatch }) {
    if ("serviceWorker" in navigator) {
      var url = "../sw.js";
      navigator.serviceWorker.register(url).then(function(swReg) {
        swReg.pushManager.getSubscription().then(function(subscription) {
          if (subscription) {
            console.log(JSON.stringify(subscription));
          } else {
            console.log("没有订阅");
            subscribeUser(swReg);
          }
        });
      });
      navigator.serviceWorker.addEventListener("message", function(event) {
        event.ports[0].postMessage("all 给出回应");
        dispatch("onMessage", event.data);
      });
    }
  }
};

export default {
  state,
  mutations,
  actions
};
