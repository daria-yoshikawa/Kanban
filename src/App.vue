<script setup lang="ts">
import { RouterView } from 'vue-router'
import { MainHeader, LeftBar } from '@/widgets'
import { MainLayout } from '@/shared'
</script>

<template>
  <div id="app" class="font-sans">
    <main-layout>
      <template #header>
        <MainHeader />
      </template>
      <template #leftbar>
        <LeftBar />
      </template>
      <template #main>
        <RouterView />
      </template>
    </main-layout>
  </div>
</template>
