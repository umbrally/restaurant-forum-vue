<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSumit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          v-modle="user.image"
          @change="handelFileChange"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true
  },
  isAuthenticated: true
};
export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        image: ""
      }
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    fetchUser(userId) {
      console.log("fetchUser id:", userId);
      this.user.id = dummyUser.currentUser.id;
      this.user.name = dummyUser.currentUser.name;
      this.user.email = dummyUser.currentUser.email;
      this.user.image = dummyUser.currentUser.image;
    },
    handelFileChange(e) {
      const files = e.target.files;
      if (!files.length) return; // 如果沒有檔案則離開此函式
      // 否則產生預覽圖...
      const imageURL = window.URL.createObjectURL(files[0]);
      console.log("aaa", imageURL);
      this.user.image = imageURL;
    },
    handleSumit(e) {
      const form = e.target;
      const formData = new FormData(form);
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    }
  }
};
</script>script