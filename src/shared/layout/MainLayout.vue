<template>
  <div class="grid grid-rows-12 grid-flow-col h-screen">
    <div class="row-span-12 bg-secondary p-5">
      <slot name="leftbar"></slot>
    </div>

    <div class="col-span-5 shadow-md sticky top-0">
      <slot name="header"></slot>
    </div>

    <div class="p-5"><slot name="main"></slot></div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped></style>
