<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="userProfile.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{userProfile.name}}</h5>
          <p class="card-text">{{userProfile.email}}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{userProfile.commentCounts}}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{userProfile.favoritedRestaurantsCounts}}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{userProfile.followingsCounts}}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{userProfile.followersCounts}}</strong> followers (追隨者)
            </li>
          </ul>
          <p></p>
          <template v-if="userProfile.id===currentUser.id">
            <router-link
              :to="{ name: 'user-edit', params: { id: currentUser.id }}"
              class="btn btn-danger btn-border mr-2"
            >Edit</router-link>
          </template>
          <template v-else>
            <button
              v-if="userProfile.isFollowed"
              type="submit"
              class="btn btn-primary"
              @click.stop.prevent="deleteFollowing(userProfile.id)"
            >取消追蹤</button>
            <button
              v-else
              type="submit"
              class="btn btn-primary"
              @click.stop.prevent="addFollowing(userProfile.id)"
            >追蹤</button>
          </template>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
export default {
  mixins: [emptyImageFilter],
  props: {
    initialUserProfile: {
      type: Object,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      userProfile: this.initialUserProfile,
      currentUser: this.currentUser
    };
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.addFollowing({ userId });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.userProfile = {
          ...this.userProfile,
          isFollowed: true
        };
        this.$emit("after-add-following");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法追蹤，請稍後再試"
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.deleteFollowing({ userId });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.userProfile = {
          ...this.userProfile,
          isFollowed: false
        };
        this.$emit("after-delete-following");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試"
        });
      }
    }
  }
};
</script>