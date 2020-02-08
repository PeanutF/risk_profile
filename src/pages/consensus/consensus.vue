<template>
  <div>
    <ul >
      <li>舆情列表</li>
      <li v-for="data1 in default_news" :key="data1.news">
        <consensusList :label="data1.label" :text="data1.news">

        </consensusList>
      </li>
    </ul>
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
        default_news: [
          {
            label: '口罩脱销',
            news: '口罩脱销口罩脱销口罩脱销'
          }, {
            label: '武汉封城',
            news: '武汉封城武汉封城武汉封城武汉封城'
          }
        ]
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
