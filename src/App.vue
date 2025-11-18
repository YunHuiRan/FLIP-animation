<template>
  <div class="bg-gray-500 w-screen h-screen flex justify-center items-center">
    <preRender ref="preRenderRef" />

    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import preRender from "./components/preRender.vue";

const preRenderRef = ref<HTMLElement | null>(null);

provide("preRender", preRenderRef);
</script>

<style></style>
