<template>
  <div class="card">
    <div class="card-header">
      <strong>{{userFollowers.length}}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="follower in userFollowers"
        :key="follower.id"
        :to="{ name: 'user', params: { id: follower.id }}"
      >
        <img :src="follower.image" width="60" height="60" class="avatar mr-1" />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userFollowers: {
      type: Object,
      required: true
    }
  }
};
</script>