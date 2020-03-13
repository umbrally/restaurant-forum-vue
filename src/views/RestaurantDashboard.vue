<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12 mb-1">
        <h1>{{restaurant.name}}</h1>
        <p class="badge badge-secondary mt-1 mb-3">{{restaurant.Category.name}}</p>
      </div>
      <hr class="col-md-12" />
      <ul class="col-md-12">
        <li>有 {{restaurant.Comments.length}} 筆評論</li>
        <li>有 {{restaurant.FavoritedUsers.length}} 人收藏這家餐廳</li>
      </ul>
      <router-link :to="{ name: 'restaurant', params: { id: restaurant.id }}">回上一頁</router-link>
    </div>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 3,
    name: "Herminio Nicolas",
    tel: "063-480-5811 x2308",
    address: "52267 Marquardt Corners",
    opening_hours: "08:00",
    description: "autem",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=38.32006179376239",
    viewCounts: 30847,
    createdAt: "2020-02-28T14:38:32.000Z",
    updatedAt: "2020-03-12T08:01:21.989Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z"
    },
    FavoritedUsers: [
      {
        id: 92,
        name: "asdasd",
        email: "asdasd@asdasd.asdasd",
        password:
          "$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO",
        isAdmin: false,
        image: null,
        createdAt: "2020-03-08T17:38:03.000Z",
        updatedAt: "2020-03-08T17:38:03.000Z",
        Favorite: {
          UserId: 92,
          RestaurantId: 3,
          createdAt: "2020-03-09T06:09:05.000Z",
          updatedAt: "2020-03-09T06:09:05.000Z"
        }
      }
    ],
    LikedUsers: [
      {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
        isAdmin: false,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-03-05T12:30:53.000Z",
        Like: {
          UserId: 2,
          RestaurantId: 3,
          createdAt: "2020-03-07T14:42:49.000Z",
          updatedAt: "2020-03-07T14:42:49.000Z"
        }
      },
      {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
        isAdmin: true,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-03-02T17:09:40.000Z",
        Like: {
          UserId: 1,
          RestaurantId: 3,
          createdAt: "2020-03-10T08:02:08.000Z",
          updatedAt: "2020-03-10T08:02:08.000Z"
        }
      }
    ],
    Comments: [
      {
        id: 3,
        text:
          "Qui maiores repellendus facere animi sit omnis asperiores pariatur.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z"
        }
      },
      {
        id: 53,
        text: "Corporis ea dolorem.",
        UserId: 2,
        RestaurantId: 3,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-05T12:30:53.000Z"
        }
      },
      {
        id: 103,
        text: "Nisi nihil dolor vero non dicta.",
        UserId: 2,
        RestaurantId: 3,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-05T12:30:53.000Z"
        }
      },
      {
        id: 3412,
        text: "test",
        UserId: 2,
        RestaurantId: 3,
        createdAt: "2020-03-05T13:54:00.000Z",
        updatedAt: "2020-03-05T13:54:00.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-05T12:30:53.000Z"
        }
      },
      {
        id: 3632,
        text: "Hi!",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2020-03-08T07:52:13.000Z",
        updatedAt: "2020-03-08T07:52:13.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T17:09:40.000Z"
        }
      },
      {
        id: 3652,
        text: "zxc",
        UserId: 102,
        RestaurantId: 3,
        createdAt: "2020-03-09T06:16:21.000Z",
        updatedAt: "2020-03-09T06:16:21.000Z",
        User: {
          id: 102,
          name: "asd@asd.asd",
          email: "asd@asd.asd",
          password:
            "$2a$10$r9jgmPQGI2uN59XwkuTiX.qRORpqYDoMg8e36WJ.bw1JexPvpXVp.",
          isAdmin: false,
          image: "https://i.imgur.com/yJTFCDh.jpg",
          createdAt: "2020-03-09T06:15:49.000Z",
          updatedAt: "2020-03-09T06:16:09.000Z"
        }
      }
    ]
  },
  isFavorited: false,
  isLiked: true
};

export default {
  data() {
    return {
      restaurant: {}
    };
  },
  created() {
    this.fetchRestaurant();
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = dummyData.restaurant;
    }
  }
};
</script>