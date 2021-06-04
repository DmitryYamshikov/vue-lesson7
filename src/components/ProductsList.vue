<template>
  <div>
    <h1>Products</h1>
    <div class="row">
      <div class="col col-sm-4 mb-3 mt-3" v-for="pr in products" :key="pr.id">
        <div class="card">
          <div class="card-body">
            <h3></h3>
            <div></div>
            <router-link >Read more</router-link>
            <hr />
            <button >Remove</button>
            <button >Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapAcions} from 'vuex';


export default {
  data: ()=>({
    
  }),
  computed: {
    ...mapGetters('products', {products:'items'}), 
  },
  methods: {
    ...mapAcions('')
  }
}
</script>