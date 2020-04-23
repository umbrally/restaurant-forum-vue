<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <table v-else class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{user.id}}</th>
          <td>{{user.email}}</td>
          <td>{{user.isAdmin | checkRole}}</td>
          <td v-if="user.id!==currentUser.id">
            <button
              type="button"
              class="btn btn-link"
              :disabled="isProcessing"
              @click.stop.prevent="changeRole(user.id,user.isAdmin)"
            >set as {{!user.isAdmin | checkRole}}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import AdminNav from "@/components/AdminNav";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner";
import { mapState } from "vuex";

export default {
  components: {
    AdminNav,
    Spinner
  },
  filters: {
    checkRole(isAdmin) {
      return isAdmin ? "admin" : "user";
    }
  },
  data() {
    return {
      users: [],
      isLoading: true,
      isProcessing: false
    };
  },
  computed: {
    ...mapState(["currentUser"])
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const { data, statusText } = await adminAPI.users.get();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.users = data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({ icon: "error", title: "無法讀取使用者清單，請稍後再試" });
      }
    },
    async changeRole(userId, isAdmin) {
      try {
        this.isProcessing = true;
        const { data, statusText } = await adminAPI.users.changeRole({
          userId,
          isAdmin: (!isAdmin).toString()
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.users = this.users.map(user => {
          if (user.id !== userId) return user;
          return { ...user, isAdmin: !user.isAdmin };
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({ icon: "error", title: "無法修改使用者，請稍後再試" });
      }
    }
  }
};
</script>
