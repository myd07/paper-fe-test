<template>
  <div class="dashboard">
    <div class="dashboard_wrapper">
      <drawer />
      <div class="dashboard_body">
        <header-component />
        <div class="dashboard_main">
          <slot />
        </div>
      </div>
    </div>
    <global-modal />
  </div>
</template>

<script lang="ts">
import Drawer from "@/components/drawer/drawer.vue";
import HeaderComponent from "@/components/header/header.vue";
import GlobalModal from "@/components/global-modal/global-modal";

export default {
  components: {
    HeaderComponent,
    Drawer,
    GlobalModal,
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  height: 100%;
}
.dashboard_wrapper {
  display: flex;
  height: 100%;
}
.dashboard_body {
  flex: 1;
  background-color: #f3fafd;
}
.dashboard_main {
  padding: 100px 25px 25px 20px;
}
</style>
