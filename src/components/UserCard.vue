<template>
  <div class="col-3">
    <a href="#">
      <img :src="user.image | defalutPhoto" width="140px" height="140px" />
    </a>
    <h2>{{user.name}}</h2>
    <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        type="button"
        class="btn btn-danger"
        @click.stop.prevent="removeFollowing(user.id)"
      >取消追蹤</button>
      <button
        v-else
        type="button"
        class="btn btn-primary"
        @click.stop.prevent="addFollowing(user.id)"
      >追蹤</button>
    </p>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
export default {
  filters: {
    defalutPhoto(image) {
      if (image) return image;
      else return "http://via.placeholder.com/300x300?text=No+Image";
    }
  },
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUser
    };
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.addFollowing({
          userId
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        console.log("aaa", this.user);
        this.user = this.user
          .map(user => {
            if (user.id !== userId) {
              return user;
            }

            return {
              ...user,
              FollowerCount: user.FollowerCount + 1,
              isFollowed: true
            };
          })
          .sort((a, b) => b.FollowerCount - a.FollowerCount);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試"
        });
      }
    },
    async removeFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.deleteFollowing({
          userId
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        this.user = this.user
          .map(user => {
            if (user.id !== userId) {
              return user;
            }

            return {
              ...user,
              FollowerCount: user.FollowerCount - 1,
              isFollowed: false
            };
          })
          .sort((a, b) => b.FollowerCount - a.FollowerCount);
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