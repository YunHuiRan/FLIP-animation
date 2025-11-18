<template>
  <div ref="startRef" class="w-[200px] h-[200px] bg-red-300" @click="FLIP">Start</div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

const startRef = ref<HTMLElement>();
const preRenderRef = inject("preRender");

async function FLIP() {
  if (!startRef.value) return;

  const startRect = startRef.value.getBoundingClientRect();

  const mode = await import("./end.vue");
  // @ts-ignore
  preRenderRef.value?.renderComponent?.(mode.default, startRect, "end");
  startRef.value.classList.add("hidden");
}
</script>

<style></style>
