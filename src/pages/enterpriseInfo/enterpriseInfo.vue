<template>
  <div>

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
    <ul>
      <li v-for="indu in indus" :key="indu.name">
        <i-row>
          <i-col offset="1" span="2" style="background-color: #dbdbdb">
            <img src="/static/images/down_20x20.png"
                 @click="changeShow(indu)" style="width: 20px; height: 20px; padding-top: 5px" alt="">
          </i-col>

          <i-col i-class="table-li" span="19" @click="changeShow(indu)">{{indu.name}}</i-col>
          <i-col v-if="indu.show" span="20">
            <ul>
              <li v-for="(enter,subIndex) in indu.enterprise" :key="enter.name" class="table-li">
                {{ enter.name }}
              </li>
            </ul>
          </i-col>
        </i-row>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        tot: 2,
        region: '武昌区',
        analyseDate: '2020-01-01',
        indus: [{
          show: false,
          name: '制造业',
          enterprise: [{
            name: '制造企业1'
          }, {
            name: '制造企业2'
          }]
        }, {
          show: false,
          name: '服务业',
          enterprise: [{
            name: '服务企业1'
          }, {
            name: '服务企业2'
          }]
        }, {
          show: false,
          name: '餐饮业',
          enterprise: [{
            name: '餐饮企业1'
          }, {
            name: '餐饮企业2'
          }]
        }],
        display: [false]
      }
    },
    methods: {
      changeShow: function (indu) {
        indu.show = ~indu.show
      }
    }
  }
</script>

<style>
  .table-li{
    text-align: left;
    margin-top: 5px;
    padding-bottom: 5px;
    margin-right: 20px;
    background-color: #f1f1f1;
  }
</style>
