<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <!-- 餐廳類別標籤 RestaurantsNavPills -->
      <RestaurantsNavPills :categories="categories" />
      <div class="row">
        <!-- 餐廳卡片 RestaurantCard-->
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <!-- 分頁標籤 RestaurantPagination -->
      <RestaurantsPagination
        v-if="totalPage > 1"
        :category-id="categoryId"
        :current-page="currentPage"
        :total-page="totalPage"
      />
      <div v-if="restaurants.length < 1">此類別目前無餐廳資料</div>
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner";

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1,
      isLoading: true
    };
  },
  created() {
    const { page = 1, categoryId = "" } = this.$route.query;
    this.fetchRestaurants({
      page,
      categoryId
    });
  },
  beforeRouteUpdate(to, from, next) {
    const { page = 1, categoryId = "" } = to.query;
    this.fetchRestaurants({ page, categoryId });
    next();
  },
  methods: {
    async fetchRestaurants({ page, categoryId }) {
      try {
        this.isLoading = true;
        const response = await restaurantsAPI.getRestaurants({
          page,
          categoryId
        });
        // STEP 2：將 response 中的 data 和 statusText 取出
        const { data, statusText } = response;
        // STEP 3：如果 statusText 不是 OK 的話則進入錯誤處理
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        // STEP 4：將從伺服器取得的 data 帶入 Vue 內
        this.categories = data.categories;
        this.categoryId = data.categoryId;
        this.currentPage = data.page;
        this.restaurants = data.restaurants;
        this.totalPage = data.totalPage.length;
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