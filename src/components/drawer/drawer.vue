<template>
  <div class="drawer">
    <img class="drawer_logo" src="@/assets/paperlogowhite.svg" alt="Paper Logo" />
    <div>
      <ul class="drawer_ul">
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/finance">Finance</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./drawer.ts" lang="ts"></script>

<style src="./drawer.scss" lang="scss" scoped></style>
