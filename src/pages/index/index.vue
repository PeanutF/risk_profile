<template>
  <div>
    <i-row>
      <i-col span="24" style="padding-top: 200px;text-align: center"><h1>
        {{title}}
      </h1></i-col>
    </i-row>
    <div style="margin-top: 100px">
      <i-row>
        <i-col span="12" offset="6">
          <i-button i-class="index-button" size="large" type="info">舆情监控</i-button>
        </i-col>
        <i-col span="12" offset="6">
          <i-button i-class="index-button" size="large" type="primary">产业风险评估</i-button>
        </i-col>
        <i-col span="12" offset="6">
          <i-button class="index-button" size="large" type="success">风险产业链分布</i-button>
        </i-col>
      </i-row>
    </div>

  </div>
</template>


<script>
  export default {
    data () {
      return {
        title: '区域产业风险预测平台'
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
.index-button{
  background-color: #4e9299;
  height: 500px;
}

</style>
