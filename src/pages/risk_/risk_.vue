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
        <li>舆情列表</li>
        <li v-for="data1 in tableData" :key="data1.news">
          {{data1.news}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '区域产业风险预测平台',
      region: '洪山区',
      regionArray: ['洪山区', '武昌区'],
      tableData: [{
        news: '口罩脱销'
      }, {
        news: '武汉封城'
      }]
    }
  },

  methods: {
    clickHandle () {
      this.msg = 'Clicked!!!!!!'
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
