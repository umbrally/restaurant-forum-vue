<template>
  <div class="container py-5">
    <form class="w-100" @submit.stop.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >Submit</button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">Sign In</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isProcessing: false
    };
  },

  methods: {
    async handleSubmit(e) {
      try {
        this.isProcessing = true;
        if (!this.name) {
          Toast.fire({
            icon: "warning",
            title: "請填寫名字"
          });
          return;
        } else if (!this.email) {
          Toast.fire({
            icon: "warning",
            title: "請填寫email"
          });
          return;
        } else if (!this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填寫密碼"
          });
          return;
        } else if (!this.passwordCheck) {
          Toast.fire({
            icon: "warning",
            title: "請重複輸入密碼"
          });
          return;
        } else if (this.password !== this.passwordCheck) {
          Toast.fire({
            icon: "warning",
            title: "兩次輸入密碼不同，請再輸入一次"
          });
          return;
        }

        const dataForm = {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck
        };

        // TODO: 向後端驗證使用者登入資訊是否合法
        console.log("data", dataForm);
        const { data, statusText } = await usersAPI.signUp(dataForm);
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        console.log("response", data);
        this.$router.push({ name: "sign-in" });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "輸入資料有誤"
        });
        this.isProcessing = false;
        console.log("error", error);
      }
    }
  }
};
</script>