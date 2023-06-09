<template>
  <div class="container" ref="refContainer">
    <div class="echart" ref="refEchart" />
  </div>
</template>

<script setup>
import { ref, reactive, markRaw, onMounted } from 'vue'
import * as echarts from 'echarts'

const refContainer = ref()
const refEchart = ref()
const echart = ref(null)

const list = ref([
  {
    "region": "上海",
    "count": 264
  },
  {
    "region": "东京都",
    "count": 4
  },
  {
    "region": "云南",
    "count": 61
  },
  {
    "region": "伊利诺伊",
    "count": 2
  },
  {
    "region": "内蒙古",
    "count": 14
  },
  {
    "region": "北京",
    "count": 385
  },
  {
    "region": "台湾",
    "count": 27
  },
  {
    "region": "吉林",
    "count": 10
  },
  {
    "region": "四川",
    "count": 236
  },
  {
    "region": "天津",
    "count": 36
  },
  {
    "region": "宁夏",
    "count": 7
  },
  {
    "region": "安徽",
    "count": 90
  },
  {
    "region": "山东",
    "count": 143
  },
  {
    "region": "山西",
    "count": 31
  },
  {
    "region": "布宜诺斯艾利斯",
    "count": 1
  },
  {
    "region": "广东",
    "count": 668
  },
  {
    "region": "广西",
    "count": 36
  },
  {
    "region": "弗吉尼亚",
    "count": 1
  },
  {
    "region": "新加坡",
    "count": 1
  },
  {
    "region": "新疆",
    "count": 7
  },
  {
    "region": "江苏",
    "count": 267
  },
  {
    "region": "江西",
    "count": 35
  },
  {
    "region": "河北",
    "count": 78
  },
  {
    "region": "河南",
    "count": 145
  },
  {
    "region": "浙江",
    "count": 270
  },
  {
    "region": "海南",
    "count": 7
  },
  {
    "region": "湖北",
    "count": 155
  },
  {
    "region": "湖南",
    "count": 101
  },
  {
    "region": "甘肃",
    "count": 10
  },
  {
    "region": "福建",
    "count": 117
  },
  {
    "region": "西藏",
    "count": 1
  },
  {
    "region": "贵州",
    "count": 29
  },
  {
    "region": "辽宁",
    "count": 69
  },
  {
    "region": "重庆",
    "count": 74
  },
  {
    "region": "陕西",
    "count": 115
  },
  {
    "region": "青海",
    "count": 1
  },
  {
    "region": "香港",
    "count": 35
  },
  {
    "region": "黑龙江",
    "count": 23
  }
])

const option = reactive({
  title: {
    text: '数据统计',
    left: 'center'
  },
  tooltip: {
    show: true,
    trigger: 'item'
  },
  xAxis: {
    type: 'category',
    data: [],
    axisLabel: {
      interval: 0,
      formatter: function(value) {
        return value.split('').join('\n')
      }
    }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [],
      type: 'line',
      smooth: true
    }
  ]
})

const init = () => {
  option.xAxis.data = list.value.map(item => item.region)
  option.series[0].data = list.value.map(item => item.count)
  echart.value = markRaw(echarts.init(refEchart.value))
  echart.value.setOption(option)
}

const resizeHandle = () => {
  if (echart.value) {
    echart.value.resize()
  }
}

onMounted(() => {
  init()
  refContainer.value.addEventListener('resize', resizeHandle)
})
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 70%;
  border: 1px solid var(--el-border-color);
  resize: both;
  overflow: hidden;
}
.echart {
  height: 100%;
  width: 100%;
}
</style>

