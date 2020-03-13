<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <RestaurantTopCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantTopCard from "./../components/RestaurantTopCard";
const dummyData = {
  restaurants: [
    {
      id: 43,
      name: "Mrs. Noemy Watsica",
      tel: "(252) 981-9430 x3227",
      address: "1218 Dariana Ports",
      opening_hours: "08:00",
      description: "Animi rerum suscipit iusto id autem et. Facilis id",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=23.889387774329695",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 5,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 1,
            RestaurantId: 43,
            createdAt: "2020-03-10T08:10:07.000Z",
            updatedAt: "2020-03-10T08:10:07.000Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 42,
      name: "Adrian Weimann",
      tel: "(102) 131-9224 x2147",
      address: "04294 Nils Track",
      opening_hours: "08:00",
      description: "Et dolores eos sed aut doloribus velit autem quae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.71296646754862",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 4,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 1,
            RestaurantId: 42,
            createdAt: "2020-03-04T05:03:04.000Z",
            updatedAt: "2020-03-04T05:03:04.000Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 11,
      name: "Vergie Considine",
      tel: "351.951.8030 x0330",
      address: "8865 Conrad Mill",
      opening_hours: "08:00",
      description: "Quia omnis natus est praesentium dolores aliquid d",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.7508871784973614",
      viewCounts: 1,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-09T06:09:15.000Z",
      CategoryId: 5,
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
            RestaurantId: 11,
            createdAt: "2020-03-09T06:09:13.000Z",
            updatedAt: "2020-03-09T06:09:13.000Z"
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 10,
      name: "Corbin Gusikowski",
      tel: "(506) 198-3977",
      address: "4747 Lubowitz Brook",
      opening_hours: "08:00",
      description: "Aut quia aut ea nostrum quae doloremque necessitat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.84802493817025",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 5,
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
            RestaurantId: 10,
            createdAt: "2020-03-09T06:09:12.000Z",
            updatedAt: "2020-03-09T06:09:12.000Z"
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 9,
      name: "Luz Schaden",
      tel: "1-712-742-4184",
      address: "4929 Wisozk Centers",
      opening_hours: "08:00",
      description: "Culpa deserunt molestiae eligendi est ex incidunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.497835218728576",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 5,
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
            RestaurantId: 9,
            createdAt: "2020-03-09T06:09:12.000Z",
            updatedAt: "2020-03-09T06:09:12.000Z"
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 8,
      name: "Mr. Johnny Abshire",
      tel: "333-243-4940 x9008",
      address: "075 Murray Stream",
      opening_hours: "08:00",
      description: "Qui omnis optio neque sit rerum nisi. Repellat qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.225573809911651",
      viewCounts: 5,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-08T13:32:30.000Z",
      CategoryId: 5,
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
            RestaurantId: 8,
            createdAt: "2020-03-09T06:09:09.000Z",
            updatedAt: "2020-03-09T06:09:09.000Z"
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 7,
      name: "Miss Letitia Will",
      tel: "(770) 750-6811 x99988",
      address: "8145 Laisha Keys",
      opening_hours: "08:00",
      description: "Aut earum molestiae et ducimus adipisci ut maxime.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.558618229229",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 5,
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
            RestaurantId: 7,
            createdAt: "2020-03-09T06:09:10.000Z",
            updatedAt: "2020-03-09T06:09:10.000Z"
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 6,
      name: "Vicenta Gutkowski",
      tel: "128-905-3953",
      address: "371 Reuben Vista",
      opening_hours: "08:00",
      description: "labore",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.659471621888123",
      viewCounts: 0,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
      CategoryId: 3,
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
            RestaurantId: 6,
            createdAt: "2020-03-09T06:09:10.000Z",
            updatedAt: "2020-03-09T06:09:10.000Z"
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 5,
      name: "Mitchel Beatty",
      tel: "171-324-8413",
      address: "85408 Francisca Square",
      opening_hours: "08:00",
      description: "Aut cumque excepturi exercitationem libero volupta",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.63208465551794",
      viewCounts: 58,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-05T17:45:05.000Z",
      CategoryId: 2,
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
            RestaurantId: 5,
            createdAt: "2020-03-09T06:09:07.000Z",
            updatedAt: "2020-03-09T06:09:07.000Z"
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 4,
      name: "Adalberto Anderson",
      tel: "313.718.9513 x0422",
      address: "3047 Marge Key",
      opening_hours: "08:00",
      description: "Quo asperiores qui omnis maxime qui voluptates sit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.21382535340547",
      viewCounts: 484,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-08T14:57:15.000Z",
      CategoryId: 4,
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
            RestaurantId: 4,
            createdAt: "2020-03-09T06:09:06.000Z",
            updatedAt: "2020-03-09T06:09:06.000Z"
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    }
  ]
};

export default {
  components: {
    NavTabs,
    RestaurantTopCard
  },
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    }
  }
};
</script>

