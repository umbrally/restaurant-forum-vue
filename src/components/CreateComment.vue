<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="text-right">
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import uuid from "uuid/v4";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // TODO: 向 API 發送 POST 請求
        // 伺服器新增 Comment 成功後...
        const { data, statusText } = await usersAPI.createComment({
          text: this.text,
          restaurantId: this.restaurantId
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text
        });
        this.text = ""; // 將表單內的資料清空
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法新增評論，請稍後再試"
        });
      }
    }
  },
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  }
};
</script>