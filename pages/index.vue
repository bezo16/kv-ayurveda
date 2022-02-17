<template>
  <section class="home" :class="dosha">

    <input type="text" @input="queryChange">
    <select name="dosha" id="dosha" v-model="dosha">
      <option value="pitta">pitta</option>
      <option value="kapha">kapha</option>
      <option value="vata">vata</option>
    </select>

    <section class="results">
      <h2 v-if="matches.fruit.length > 0">Fruits</h2>
      <p v-if="matches.fruit.length"> pre vatu je nepriazniva {{ descriptions.vata.fruits.avoid }} a priazniva {{ descriptions.vata.fruits.favorable }}</p>
      <p v-for="(m,index) in matches.fruit" :key="'fruit' +index" class="matchpar" :class="{avoid:!m.favorable,favor:m.favorable}"> {{ m.name }}  </p>

      <h2 v-if="matches.vegetable.length > 0">Vegetables</h2>
      <p v-if="matches.vegetable.length"> pre vatu je nepriazniva {{ descriptions.vata.vegetables.avoid }} a priazniva {{ descriptions.vata.vegetables.favorable }}</p>
      <p v-for="(m,index) in matches.vegetable" :key="'vegetable' +index" class="matchpar" :class="{avoid:!m.favorable,favor:m.favorable}"> {{ m.name }}  </p>
    </section>

  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      dosha: "vata" as string,
      matches: {
        fruit: [],
        vegetable: [],
      } as any,
      data: {
        vata: this.$store.state.vata.all as [],
        kapha: this.$store.state.kapha.all as [],
        pitta: this.$store.state.pitta.all as [],
      } as any,
      descriptions: {
        vata: this.$store.state.vata.descriptions,
        kapha: this.$store.state.kapha.descriptions,
        pitta: this.$store.state.pitta.descriptions,
      } as {},
      queryString: "" as string,
    }
  },
  methods: {
    queryChange(e: any) {
      this.resetData()
      this.queryString = e.target.value.toLowerCase()

      if(this.queryString) {
        let allMatches = this.data[this.dosha].filter((i: any) => i.name.includes(this.queryString))
        allMatches.forEach((m: any) => {
          this.matches[m.type].push(m)
        })
      } else {
        this.resetData()
      }
    },
    resetData() {
      this.matches.fruit = []
      this.matches.vegetable = []
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
    background: #ebfaff;
  }

  .kapha {
    background: #f7fff7;
  }

  .pitta {
    background: #fff7f7;
  }
</style>
