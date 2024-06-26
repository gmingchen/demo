const STATUS = {
  CLOSED: 0, // 关闭 
  CONNECTING: 1, // 已连接
  MANUAL_CLOSED: 2, // 手动关闭
}
export default class WebsocketClass {
  constructor(url, callback) {
    this.url = url
    this.callback = callback || (() => {})
    this.status = STATUS.CLOSED 
  }
  connect() {
    const ws = new WebSocket(this.url)
    ws.onopen = () => {
      this.status = STATUS.CONNECTING
      heart()
    }
    ws.onmessage = (e) => this.callback(JSON.parse(e.data))
    ws.onerror = (e) => this.reconnect()
    ws.onclose = (e) => this.reconnect()
    this.ws = ws
  }
  close() {
    this.status = STATUS.MANUAL_CLOSED
    this.ws.close()
  }
  send(data) {
    return this.ws.send(JSON.stringify(data))
  }
  reconnect() {
    setTimeout(() => {
      if (this.status === STATUS.CLOSED)
        this.connect()
    }, 3000);
  }
  heart() {
    const data = {
      type: 0
    }
    const interval = setInterval(() => {
      if (this.status === STATUS.CONNECTING)
        this.send(data)
      else
        clearInterval(interval)
    }, 50000)
  }
}

