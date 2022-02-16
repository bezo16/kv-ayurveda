<template>
  <section class="home" :class="dosha">
    <h2>ayurveda app</h2>
    <input type="text" @input="queryChange">
    <select name="dosha" id="dosha" v-model="dosha">
      <option value="pitta">pitta</option>
      <option value="kapha">kapha</option>
      <option value="vata">vata</option>
    </select>
    <p v-for="(m,index) in matches" :key="index" class="matchpar" :class="{avoid:!m.favorable,favor:m.favorable}"> {{ m.name }}  </p>
    <h1> {{ data.vata }} </h1>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      dosha: "vata" as string,
      matches: [],
      data: {
        vata: this.$store.state.vata.all as [],
        kapha: this.$store.state.kapha.all as [],
        pitta: this.$store.state.pitta.all as [],
      } as any,
      queryString: "" as string,
    }
  },
  methods: {
    queryChange(e: any) {
      this.queryString = e.target.value.toLowerCase()

      if(this.queryString) {
        this.matches = this.data[this.dosha].filter((i: any) => i.name.includes(this.queryString))
      } else {
        this.matches = []
      }
    }
  },
})
</script>

<style scoped>
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .matchpar {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: bold;
  }

  .avoid {
    color: red;
  }

  .favor {
    color: rgb(133, 197, 23);
  }

  .vata {
    background: #cbf2ff;
  }

  .kapha {
    background: #dfffdf;
  }

  .pitta {
    background: #ffdddc;
  }
</style>
