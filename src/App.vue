<template>
  <div id="nav">
    <router-link class="bg" active-class="active" to="/">Home</router-link> |
    <router-link class="bg" to="/about">About</router-link> |
    <router-link class="bg" to="/user">User</router-link> |
    <router-link class="bg" to="/about" custom v-slot="{ navigate }">
      <span @click="navigate" role="link">About</span>
      <button @click="navigate" role="link">About</button>
    </router-link>
    |
    <button
      :class="{ active: $route.path == '/user' }"
      @click="$router.push('/user')"
    >
      User
    </button>
    <br />
    {{ $route.path }}
  </div>
  <hr />
  <!-- <router-view></router-view> -->
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive exclude="About">
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
  <!-- <div style="display: flex">
    <router-view class="one" name="User" />
    <router-view class="two" />
    <router-view class="three" name="About" />
  </div> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.active {
  color: red !important;
}

.bg {
  background: #bbd3bb;
}

.one {
  width: 25%;
  height: 300px;
  background: #f0fff0;
}
.two {
  width: 50%;
  height: 300px;
  background: #88888888;
}
.three {
  width: 25%;
  height: 300px;
  background: #f0fff0;
}
</style>
