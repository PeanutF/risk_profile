<template>

  <!-- <i-button type="primary" bind:click="handleClick">这是一个按钮</i-button> -->
  <div class="container" >


    <i-row>
      <i-col span="24" i-class="col-class">
        <div class="message">{{title}}</div>
      </i-col>
    </i-row>

    <i-row>

      <i-col span="12">
        <div >
          <picker :value="date" >
            <i-button type="primary" size="small">
              点击选择日期
            </i-button>
          </picker>
        </div>

      </i-col>

      <i-col span="12">
        <div >
          <picker :value="region" :range="regionArray" >
            <i-button type="primary" size="small">
              点击选择地区
            </i-button>
          </picker>
        </div>

      </i-col>
    </i-row>

    <div class="container">
      <ul >
        <li>舆情列表（点击可以查看分析情况）</li>
        <li v-for="data1 in tableData" :key="data1.news" @click="gotoAnalyse(data1.id)">
          <consensusList :label="data1.label" :text="data1.news" >

          </consensusList>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import consensusList from '../../components/consensusList'

export default {
  components: {
    consensusList
  },
  data () {
    return {
      title: '区域产业风险预测平台',
      region: '洪山区',
      regionArray: ['洪山区', '武昌区'],
      tableData: [{
        id: 1,
        label: '口罩脱销',
        news: '口罩脱销口罩脱销口罩脱销'
      }, {
        id: 2,
        label: '武汉封城',
        news: '武汉封城武汉封城武汉封城武汉封城'
      }]
    }
  },
  methods: {
    clickHandle () {
      this.msg = 'Clicked!!!!!!'
    },
    gotoAnalyse (newsId) {
      console.log('clicked!!')
      wx.navigateTo({url: '/pages/analyse/main?id=' + newsId})
    }
  }
}
</script>

<style scoped>
.message {
  color: black;
  padding: 10px;
  text-align: left;
}
.news-label{
  font-size: 15px;
  text-align: left;
  margin-bottom: 2px;
}
.news-text {
  font-size: 10px;
  color: gray;
  text-align: left;
  margin-bottom: 2px;
}
li{
  text-align: center;
  margin-top: 5px;
  padding-bottom: 5px;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom:solid 1px #4e9299;
}
  ul{
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center;
  }

</style>
