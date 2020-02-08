<template>
  <div>
    <p class="news-label">
      {{label}}
    </p>
    <p class="news-text">
      {{text}}
    </p>
  </div>
</template>

<script>
  export default {
    // name: 'consensusList',
    props: ['label', 'text'],
    data () {
      return {
        num: 0
      }
    },

    methods: {
    }
  }
</script>

<style>
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
</style>
