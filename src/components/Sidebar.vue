<template>
  <div class="relative min-h-screen md:flex">
    <!-- mobile menu bar -->
    <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
      <!-- logo -->
      <a href="#" class="block p-4 text-white font-bold">Better Dev</a>
      <!-- mobile menu button -->
      <button @click="showMenu = !showMenu" class="mobile-menu-button pt-0.5 pb-0.5 focus:outline-none focus:bg-gray-700 -translate-x-full">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <!-- sidebar -->
    <div v-bind:class="{'-translate-x-full': showMenu }" class="sidebar text-blue-100 w-64 space-y-6 py-7 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out" style="background-color: #111827;">
      <!-- logo -->
      <a href="#" class="text-white flex items-center space-x-2 px-4">
        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        <span class="text-2xl font-extrabold">Better Dev</span>
      </a>
      <!-- nav -->
      <nav style="height: 100%">
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          TRẠNG THÁI
        </a>
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          TÚI ĐỒ
        </a>
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          TRANG BỊ
        </a>
        <a href="" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          KỸ NĂNG
        </a>
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          PET
        </a>
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          MÔN PHÁI
        </a>
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
         ĐAN CÁC
        </a>
        <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          THỢ RÈN
        </a>
      </nav>
    </div>
    <!-- content -->
    <div class="flex-1 p-10 text-2xl font-bold">
      content goes here
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
const showMenu = ref(false)
</script>