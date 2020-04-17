<template>
  <div class="container py-5">
    <UserProfileCard
      :initial-user-profile="userProfile"
      :current-user="currentUser"
      @after-add-following="addFollowing"
      @after-delete-following="deleteFollowing"
    />

    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :user-followings="userFollowings" />

        <br />
        <UserFollowersCard :user-followers="userFollowers" />
      </div>
      <div class="col-md-8">
        <UserCommentsCard :comments="commentRestaurants" />

        <br />
        <UserFavoritedRestaurantsCard :favorited-restaurants="favoritedRestaurants" />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard.vue";
import UserFollowingsCard from "./../components/UserFollowingsCard.vue";
import UserFollowersCard from "./../components/UserFollowersCard.vue";
import UserCommentsCard from "./../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data() {
    return {
      userProfile: {
        id: -1,
        name: "",
        email: "",
        image: "",
        commentCounts: 0,
        favoritedRestaurantsCounts: 0,
        followingsCounts: 0,
        followersCounts: 0,
        isFollowed: false
      },
      userFollowings: [],
      userFollowers: [],
      commentRestaurants: [],
      favoritedRestaurants: []
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  computed: {
    ...mapState(["currentUser"])
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    next();
  },

  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await usersAPI.get({
          userId
        });
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.userProfile.id = data.profile.id;
        this.userProfile.name = data.profile.name;
        this.userProfile.email = data.profile.email;
        this.userProfile.image = data.profile.image;
        this.userProfile.commentCounts = data.profile.Comments.length;
        this.userProfile.favoritedRestaurantsCounts =
          data.profile.FavoritedRestaurants.length;
        this.userProfile.followingsCounts = data.profile.Followings.length;
        this.userProfile.followersCounts = data.profile.Followers.length;
        this.userProfile.isFollowed = data.isFollowed;
        this.userFollowings = data.profile.Followings;
        this.userFollowers = data.profile.Followers;
        this.commentRestaurants = data.profile.Comments;
        this.favoritedRestaurants = data.profile.FavoritedRestaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法獲得使用者資訊，請稍後再試"
        });
      }
    },
    addFollowing() {
      this.userFollowers.push({
        ...this.currentUser,
        password: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        Followship: {
          followerId: this.currentUser.id,
          followingId: this.userProfile.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
    },
    deleteFollowing() {
      this.userFollowers = this.userFollowers.filter(follower => {
        return follower.id !== this.currentUser.id;
      });
    }
  }
};
</script>