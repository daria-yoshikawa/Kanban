<template>
  <div class="flex items-center text-2xl font-bold mb-4"><LogoIcon class="mr-2" /> Kanban</div>
  <div class="text-text-secondary">
    <h2 class="mb-2 text-xl font-bold">Home</h2>
    <nav class="mb-4">
      <ul class="flex justify-between md:flex-col">
        <li>
          <router-link
            :to="{ name: PAGES.HOME }"
            class="menu-link rounded-2 flex flex-col md:flex-row items-center no-underline py-3 px-1 hover:bg-green-light"
          >
            <div class="i-system-uicons-document-justified mr-2" />
            Boards
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: PAGES.ABOUT }"
            class="menu-link rounded-2 flex flex-col md:flex-row items-center no-underline py-3 px-1 hover:bg-green-light"
          >
            <div class="i-system-uicons-backward mr-2" />
            Message
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: PAGES.HOME }"
            class="menu-link rounded-2 flex flex-col md:flex-row items-center no-underline py-3 px-1 hover:bg-green-light"
          >
            <div class="i-system-uicons-contacts mr-2" />
            Profile
          </router-link>
        </li>
      </ul>
    </nav>

    <h2 class="mb-2 text-xl font-bold">My boards</h2>
    <nav class="mb-4">
      <ul class="flex justify-between md:flex-col">
        <li>
          <router-link
            :to="{ name: PAGES.HOME }"
            class="menu-link rounded-2 flex flex-col md:flex-row items-center no-underline p-3 hover:bg-green-light"
          >
            <div class="rounded-100 bg-red w-1 h-1 mr-3" />
            Boards
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: PAGES.ABOUT }"
            class="menu-link rounded-2 flex flex-col md:flex-row items-center no-underline p-3 hover:bg-green-light"
          >
            <div class="rounded-100 bg-green w-1 h-1 mr-3" />
            Message
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: PAGES.HOME }"
            class="menu-link rounded-2 flex flex-col md:flex-row items-center no-underline p-3 hover:bg-green-light"
          >
            <div class="rounded-100 bg-blue w-1 h-1 mr-3" />
            Profile
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { PAGES } from '@/router/types'
import { LogoIcon } from '@/shared/icons'
import { RouterLink } from 'vue-router'
</script>
