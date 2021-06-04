<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Site</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <div>In Cart</div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group" v-for="item in menu" :key="item.route">
              <router-link :to="{name: item.route}" exact-active-class="text-danger">{{ item.title }}</router-link>
            </ul>
          </div>
          <div class="col col-sm-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
  .menu {
    border-right: 1px solid #ddd;
  }

  .list-group-item {
    transition: background 0.3s, color 0.3s;
  }

  .list-group-item a {
    text-decoration: none;
  }

  .list-group-item.active a {
    color: inherit;
  }
</style>

<script>
  export default {
    data() {
      return {
        menu: [
          { title: "Catalog", route: "catalog" },
          { title: "Cart", route: "cart" },
          { title: "Checkout", route: "order" },
        ],
      };
    },
  };
</script>
