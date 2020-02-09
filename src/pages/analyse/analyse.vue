<template>
  <div>
    <i-row>
      <div>
        <img src="/static/images/back.png" style="width: 30px; height: 30px; padding-left: 20px" alt=""
        @click="navigateBack">
      </div>
    </i-row>

    <i-row>
      <i-col span="20" offset="2">
        <div style="text-align: center;font-size: large"><h1>{{newsTitle}}</h1></div>
      </i-col>
    <i-row>
      <i-col span="20" offset="2" style="text-align: center; margin-top: 4px;"><h3 style="color: gray">{{region}}</h3></i-col>

    </i-row>
    </i-row>
    <i-row>
      <img src="/static/images/statistic.jpg" >
    </i-row>
    <i-row>
      <ul style="text-align: center; margin-left: 20px; margin-right: 20px" >
        <li class="table-ul">
          <i-row class="">
            <i-col span="8" >
              <p>产业</p>
            </i-col>
            <i-col span="8">
              <p>影响系数</p>
            </i-col>
          </i-row>
        </li>
        <li v-for="indu in indus" :key="indu.name" class="table-li">
          <i-row @click="changeShow(indu)">
            <i-col span="8"><p>{{indu.name}}</p></i-col>
            <i-col span="8"><p>{{indu.influence}}</p></i-col>
          </i-row>
          <i-row v-if="indu.show" span="20">
            <ul>
              <i-row v-for="(enter,subIndex) in indu.enterprise" :key="subIndex">
                <i-col span="8">
                  <li class="table-li">
                    {{ enter.name }}
                  </li>
                </i-col>
                <i-col span="8">
                  <li class="table-li">
                    {{ enter.influence }}
                  </li>
                </i-col>
              </i-row>

            </ul>
          </i-row>
        </li>

      </ul>
    </i-row>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        region: '洪山区',
        newsTitle: '武汉封城',
        indus: [{
          name: '制造业',
          influence: 10,
          show: false,
          enterprise: [{
            name: '企业1',
            influence: 1
          }]
        }
        ]
      }
    },
    methods: {
      changeShow: function (indu) {
        indu.show = ~indu.show
      },
      navigateBack: function () {
        console.log('back!!!')
        wx.navigateBack({
          delta: 1,
          success: () => {
            console.log('success')
          },
          fail: () => {
            console.log('fail')
          }
        })
      }
    }
  }
</script>

<style scoped>
.table-ul{
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #f1f1f1;
}
.table-li{
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: 1px;
  margin-bottom: 1px;
  background-color: #f1f1f1;
  font-size: small;
}
</style>
