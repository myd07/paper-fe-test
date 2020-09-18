<template>
  <div
    class="global-modal"
    :class="[{'visible': getModalConfig.visible}, getModalConfig.customClass]"
  >
    <div class="global-modal_background" @click="handleClose()"></div>
    <div class="global-modal_content">
      <div class="global-modal_content-head" v-if="getModalConfig.hasHead">
        <span class="global-modal_content-title">{{getModalConfig.title}}</span>
        <div class="global-modal_content-icon">
          <!-- <font-awesome-icon :icon="['fas', 'times']" @click="handleClose()" /> -->
        </div>
      </div>
      <div class="global-modal_content-body" :style="[getModalConfig.contentStyle]">
        <component :is="componentName" :product="getModalConfig.data" :data="getModalConfig.data"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./global-modal.ts"></script>

<style lang="scss" src="./global-modal.scss" scoped></style>