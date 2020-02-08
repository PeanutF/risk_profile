<template>
  <div>
    <i-row>
      <i-col span="8" offset="4">{{region}}</i-col>

    </i-row>
    <i-row>
      <i-col span="24">
        <div><p>{{news-title}}</p></div>
      </i-col>
    </i-row>
    <i-row>
      <img src="/static/images/statistic.jpg" >
    </i-row>
    <i-row>
      <ul>
        <li>
          <i-row>
            <i-col span="12">
              <p>产业</p>
            </i-col>
            <i-col span="12">
              <p>影响系数</p>
            </i-col>
          </i-row>
          {{indu}}</li>

      </ul>
    </i-row>

  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

</style>
