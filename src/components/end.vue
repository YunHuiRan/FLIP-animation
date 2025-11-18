<template>
  <div ref="endRef" class="w-[1314px] h-[520px] bg-green-300" @click="FLIP">End</div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

const endRef = ref<HTMLElement>();
const preRenderRef = inject("preRender");

async function FLIP() {
  if (!endRef.value) return;

  const startRect = endRef.value.getBoundingClientRect();

  const mode = await import("./start.vue");
  // @ts-ignore
  preRenderRef.value?.renderComponent?.(mode.default, startRect, "start");
  endRef.value.classList.add("hidden");
}
</script>

<style></style>
