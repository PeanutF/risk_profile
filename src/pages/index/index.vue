<template>
  <div>
    <i-row>
      <i-col span="16" offset="2"><h1>
        {{title}}
      </h1></i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <i-button i-class="index-button" size="large" type="info">舆情监控</i-button>
      </i-col>
      <i-col span="12">
        <i-button i-class="index-button" size="large" type="primary">风险预测</i-button>
      </i-col>
      <i-col span="12">
        <i-button class="index-button" size="large" type="success">产业分布</i-button>
      </i-col>
    </i-row>
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
