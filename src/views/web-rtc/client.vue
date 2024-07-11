<template>
  <div class="client">
    <div>{{ name }}</div>
    <video ref="refVideo"></video>
    <div>
      <el-button :disabled="!connection" @click="call">呼叫</el-button>
      <el-button :disabled="!connection" @click="accept">接听</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const emits = defineEmits(['localDescription'])
const props = defineProps({
  name: {
    type: String,
    default: () => ''
  }
})

const connection = ref(null)
const channel = ref(null)
const localDescription = ref(null)
const remoteDescription = ref(null)

const refVideo = ref(null)

// 获取媒体流 并添加加到连接
const getUserMediaStream = async () => {
  if (navigator.mediaDevices.getUserMedia) {
    const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => {
        connection.value.addTrack(track, mediaStream)
      });
    }
  }
}

// 通道处理
const channelHandle = (dataChannel) => {
  channel.value = dataChannel
  channel.value.onopen = () => console.log('open')
  channel.value.onclose = () => console.log('close')
  channel.value.onmessage = (e) =>  console.log('message', e)
}
// ice 监听处理器
const onicecandidate = ({ candidate }) => {
  if (!candidate) {
    localDescription.value = connection.value.localDescription
    emits('localDescription', localDescription.value)
  }
}
// 通道监听处理器
const ondatachannel = ({ channel }) => {
  channelHandle(channel)
}
// 远程对等端添加一个新的或更改现有轨道 监听处理器。 将获取到的数据在播放器中播放
const ontrack = (event) => {
  console.log(`【${ props.name }】ontrack`);
  refVideo.value.srcObject = event.streams[0];
  refVideo.value.play()
}
// 呼叫
const call = async () => {
  const dataChannel = connection.value.createDataChannel('channel');
  channelHandle(dataChannel)
  const offer = await connection.value.createOffer()
  connection.value.setLocalDescription(offer);
}
// 接受呼叫
const accept = async () => {
  connection.value.setRemoteDescription(remoteDescription.value)
  const answer = await connection.value.createAnswer()
  connection.value.setLocalDescription(answer);
}
// 初始化
const init = () => {
  connection.value = new RTCPeerConnection()
  connection.value.onicecandidate = onicecandidate
  connection.value.ondatachannel = ondatachannel
  getUserMediaStream()
  connection.value.ontrack = ontrack
}
// 设置远程SDP
const remoteDescriptionHandler = (description) => {
  remoteDescription.value = description
  connection.value.setRemoteDescription(remoteDescription.value)
}
defineExpose({ init, remoteDescriptionHandler })
</script>
<style scoped>
.client {}
video {
  height: 250px;
  width: 300px;
}
</style>
