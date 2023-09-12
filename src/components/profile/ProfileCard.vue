<template>
  <div class="relative">
    <div
      class="flex items-center py-1 px-3 rounded-2 hover:bg-secondary"
      :class="{ 'rounded-b-0 bg-secondary': isOptionOpen }"
      @click="clickOnProfile"
    >
      <img :src="props.photo" class="rounded-50 w-12 mr-2" />

      <div class="mr-2 min-w-35">
        <div class="text-lg">{{ props.name }}</div>
        <div class="text-sm color-text-secondary">{{ props.email }}</div>
      </div>
      <div class="i-system-uicons-chevron-down" />
    </div>
    <div class="w-full absolute flex flex-col bg-secondary rounded-b-2" v-show="isOptionOpen">
      <button class="p-3 text-left text-lg hover:bg-green-light">Профиль</button>
      <button class="p-3 text-left text-lg hover:bg-green-light rounded-b-2">Выйти</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  name: string
  email: string
  photo: string
}

const props = defineProps<Props>()

const isOptionOpen = ref(false)

const clickOnProfile = () => {
  isOptionOpen.value = !isOptionOpen.value
}
</script>
