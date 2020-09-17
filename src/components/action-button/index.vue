<template>
  <button
    class="action-button-common"
    :class="[type, className, {loading: isLoading, disabled: disabled}]"
    :disabled="isLoading || disabled"
    :type="buttonType"
    @click="handleClick()"
  >
    <template v-if="!isLoading">
      <slot v-if="hasContentSlot" name="content" />
      <span v-else>{{text}}</span>
    </template>
    <svg
      v-else
      class="spinner"
      width="65px"
      height="65px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="path"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  </button>
</template>

<script lang="ts" src="./action-button.ts"></script>

<style lang="scss" src="./action-button.scss"></style>