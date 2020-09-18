<template>
  <div class="header">
    <div>
      <popper trigger="clickToOpen" :options="{
        placement: 'bottom',
      }">
        <div class="popper more-content" @click="onLogout">Logout</div>

        <div slot="reference" class="more-icon">{{username}}</div>
      </popper>
    </div>
  </div>
</template>

<script src="./header.ts" lang="ts"></script>

<style src="./header.scss" lang="scss" scoped></style>
