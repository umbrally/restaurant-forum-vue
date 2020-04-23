<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <div v-else class="row">
      <div class="col-md-12 mb-1">
        <h1>{{restaurant.name}}</h1>
        <p class="badge badge-secondary mt-1 mb-3">{{restaurant.Category.name}}</p>
      </div>
      <hr class="col-md-12" />
      <ul class="col-md-12">
        <li>有 {{restaurant.Comments.length}} 筆評論</li>
        <li>有 {{restaurant.FavoritedUsers.length}} 人收藏這家餐廳</li>
      </ul>
      <a href="#" @click="$router.back()">回上一頁</a>
    </div>
  </div>
</template>

<script>
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner";

export default {
  components: {
    Spinner
  },
  data() {
    return {
      restaurant: {},
      isLoading: true
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        this.isLoading = true;
        const { data, statusText } = await restaurantsAPI.getRestaurant({
          restaurantId
        });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.restaurant = data.restaurant;
        console.log(
          "aa",
          this.restaurant.name,
          this.restaurant.Category.name,
          this.restaurant.Comments.length,
          this.restaurant.FavoritedUsers.length
        );
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    }
  }
};
</script>