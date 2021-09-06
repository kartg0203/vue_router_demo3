<template>
  <div>
    user
    <br />
    <div style="display: flex">
      <div class="menu">
        <ul>
          <li><router-link to="/user/order">我的訂單</router-link></li>
          <li><router-link to="/user/setting">我的設定</router-link></li>
          <li><router-link to="/user/page/1">單頁一</router-link></li>
        </ul>

        <ul>
          <li v-for="item in articles" :key="item.id">
            <router-link :to="'/user/page/' + item.id">{{
              item.title
            }}</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/user/article?id=30&name=ikoi">元氣</router-link>
          </li>
          <li>
            <router-link
              :to="{ path: '/user/article', query: { id: 40, name: 'momoa' } }"
              >新人</router-link
            >
          </li>
        </ul>
        <button
          @click="
            $router.push({
              path: '/user/article',
              query: { id: 60, name: '人気曲いっぱい歌う' },
            })
          "
        >
          article
        </button>
      </div>
      <div class="content">
        <!-- <router-view></router-view> -->
        <router-view v-slot="{ Component }">
          <transition>
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MyOrder from "./MyOrder.vue";
import MySetting from "./MySetting.vue";
import { reactive, onUnmounted, onActivated, onDeactivated, ref } from "vue";
import { onBeforeRouteLeave, useRouter } from "vue-router";
export default {
  name: "User",
  components: {
    MyOrder,
    MySetting,
  },
  setup() {
    const router = useRouter();
    const path = ref("/user");
    const articles = reactive([
      { title: "文章一", id: 20 },
      { title: "文章二", id: 21 },
      { title: "文章三", id: 22 },
      { title: "文章四", id: 23 },
      { title: "文章五", id: 24 },
    ]);

    console.log("User組件被創建");

    onUnmounted(() => {
      console.log("User組件被銷毀");
    });

    onActivated(() => {
      console.log("User 緩存的組件激活時調用");
      router.push(path.value);
    });

    onDeactivated(() => {
      console.log("User 緩存的組件停用時調用");
    });
    onBeforeRouteLeave((to, from) => {
      // console.log(from.fullPath);
      path.value = from.fullPath;
    });
    return { articles };
  },
};
</script>

<style>
.menu {
  width: 30%;
  height: 300px;
  background: #f0fff0;
}
.content {
  width: 70%;
  height: 300px;
  background: white;
}
ul {
  list-style: none;
}
a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
