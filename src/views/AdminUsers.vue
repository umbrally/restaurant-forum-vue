<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
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
              @click.stop.prevent="changeRole(user.id)"
            >set as {{!user.isAdmin | checkRole}}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import AdminNav from "@/components/AdminNav";
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
      isAdmin: true,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-02T17:09:40.000Z"
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-05T12:30:53.000Z"
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-02T16:01:50.000Z"
    },
    {
      id: 62,
      name: "AC",
      email: "ac@ac.com",
      password: "$2a$10$yB01LxQAujWjRQ0WaprYV.t5SDx6kool5Cmrt0F7TRSXGRk.W8z1m",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-29T15:41:09.000Z",
      updatedAt: "2020-02-29T15:41:09.000Z"
    },
    {
      id: 72,
      name: "mohammad akhbarati",
      email: "makhbarati@gmail.com",
      password: "$2a$10$ljaWKqtQwgLA5BdTEhBTHeJK/Ku4ow3IHM4S5OJYmr7.anBAIl7NW",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-29T23:24:32.000Z",
      updatedAt: "2020-02-29T23:24:32.000Z"
    },
    {
      id: 82,
      name: "aaa",
      email: "aaa@aaa",
      password: "$2a$10$tKDZYhuLyqqwiWqILKWygewD8m9w8LXtMVux1iRaa8CMVsWJa5ma.",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-08T14:50:18.000Z",
      updatedAt: "2020-03-08T14:50:18.000Z"
    },
    {
      id: 92,
      name: "asdasd",
      email: "asdasd@asdasd.asdasd",
      password: "$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-08T17:38:03.000Z",
      updatedAt: "2020-03-08T17:38:03.000Z"
    },
    {
      id: 102,
      name: "asd@asd.asd",
      email: "asd@asd.asd",
      password: "$2a$10$r9jgmPQGI2uN59XwkuTiX.qRORpqYDoMg8e36WJ.bw1JexPvpXVp.",
      isAdmin: false,
      image: "https://i.imgur.com/yJTFCDh.jpg",
      createdAt: "2020-03-09T06:15:49.000Z",
      updatedAt: "2020-03-09T06:16:09.000Z"
    },
    {
      id: 112,
      name: "測試",
      email: "123@example.com",
      password: "$2a$10$oJlwrpCT8jAC2Kamet775u3kNbd.SV85yvHH9c/L2bKODZ437Cn/K",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-12T15:28:49.000Z",
      updatedAt: "2020-03-12T15:28:49.000Z"
    }
  ],
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
  components: {
    AdminNav
  },
  filters: {
    checkRole(isAdmin) {
      return isAdmin ? "admin" : "user";
    }
  },
  data() {
    return {
      users: [],
      currentUser: {}
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
      this.currentUser = dummyData.currentUser;
    },
    changeRole(userId) {
      this.users = this.users.map(user => {
        if (user.id !== userId) return user;
        return { ...user, isAdmin: !user.isAdmin };
      });
    }
  }
};
</script>
