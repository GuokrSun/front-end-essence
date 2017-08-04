<template>
  <div class="hello">
    <h1>{{ getCount }}</h1>
    <h2>{{ count }}</h2>
    <button @click="addCount(5)">累加5</button>
    <!-- <button @click="$store.dispatch('addCount',10)">累加10</button> -->
    <button @click="incre(10)">累加10</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  methods: {
    // fn(n) {
    //   this.$store.commit('addCount',n)
    // }
    ...mapActions({incre: 'addCount'}),
    ...mapMutations(['addCount'])
  },
  computed: {
    // getCount() {
    //   return this.$store.getters.count
    // },
    ...mapGetters({getCount: 'count'}),
    ...mapState(["count"])
  },//相当与this.$store.state.count
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
