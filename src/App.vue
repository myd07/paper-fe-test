<template>
  <div id="app">
    <component :is="$route.meta.layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import DefaultLayout from "@/components/layout-default/layout-default.vue";
import DashboardLayout from "@/components/layout-dashboard/layout-dashboard.vue";

export default {
  components: {
    DefaultLayout,
    DashboardLayout,
  },
};
</script>
