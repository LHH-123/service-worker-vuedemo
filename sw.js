let message = "";

function send_message_to_client(client, msg) {
  return new Promise(function(resolve, reject) {
    var msg_chan = new MessageChannel();
    msg_chan.port1.onmessage = function(event) {
      if (event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data);
      }
    };
    client.postMessage(msg, [msg_chan.port2]);
  });
}
function send_message_to_all_clients(msg) {
  clients.matchAll().then(clients => {
    clients.forEach(client => {
      send_message_to_client(client, msg).then(m =>
        console.log("向客户端发送消息： " + m)
      );
    });
  });
}

self.addEventListener("push", function(event) {
  const title = event.data.text();
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  var url =
    "https://lhh-123.github.io/service-worker-vuedemo/dist/index.html#/";
  event.waitUntil(
    clients
      .matchAll({
        type: "window"
      })
      .then(function() {
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
  );
});

self.addEventListener("install", function(event) {
  console.log("状态:install");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  console.log("状态:activate");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", function(event) {
  event.ports[0].postMessage("sw给出回应");
  console.log(event.data);
  if (!event.data) return;
  if (event.data.type == 0) {
    event.waitUntil(
      self.registration.showNotification("update", {
        body: event.data
      })
    );
  } else if (event.data.type == 1) {
    send_message_to_all_clients(event.data);
  } else if (event.data.type == 2) {
    send_message_to_all_clients(event.data);
  } else {
    console.log(event.data);
  }
});

//可以离线推送；
