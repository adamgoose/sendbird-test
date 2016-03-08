import sendbird_client from 'sendbird'

module.exports = function() {

  // TODO: convert to class!

  var SendBird = function() {
    this.appId = 'AB678D91-A5B4-4B7E-AF77-639CD60F1246'
    this.username = null
    this.channel = null
  }

  SendBird.prototype.login = function(username, cb) {
    this.username = username;

      sendbird_client.init({
        app_id: this.appId,
        guest_id: this.username,
        user_name: this.username,
        successFunc: (data) => {
          cb(data)
        }
      });
  }

  SendBird.prototype.getChannels = function(cb) {
    sendbird_client.getChannelList({
      successFunc: (data) => {
        cb(data)
      }
    })
  }

  SendBird.prototype.join = function(channel, cb) {
    sendbird_client.joinChannel(channel.channel_url, {
      successFunc : () => {
        sendbird_client.connect({
          successFunc: () => {
            cb(null)
          }
        })
      }
    })
  }

  SendBird.prototype.load = function(cb) {
    sendbird_client.getMessageLoadMore({
      successFunc: (data) => {
        cb(data.messages)
      }
    })
  }

  SendBird.prototype.send = function(message) {
    sendbird_client.message(message)
  }

  SendBird.prototype.on = function(event, cb) {
    sendbird_client.events['on' + event] = cb;
  }

  return new SendBird;

}();