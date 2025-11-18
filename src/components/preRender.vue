<template>
  <div ref="container" class="fixed top-0 left-0 zindex-[-9999]">
    <component :is="component" v-if="component" />
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, nextTick } from "vue";

const container = ref();
const component = shallowRef();

async function renderComponent(comp: any, startRect: DOMRect) {
  component.value = comp;
  await nextTick();
  const endRect = await container.value.firstElementChild.getBoundingClientRect();
  component.value = null;

  const clone = document.createElement("div");
  Object.assign(clone.style, {
    width: startRect.width + "px",
    height: startRect.height + "px",
    position: "fixed",
    top: startRect.top + "px",
    left: startRect.left + "px",
    background: "white",
    transition: "all 0.5s ease-in-out",
  });
  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    Object.assign(clone.style, {
      width: endRect.width + "px",
      height: endRect.height + "px",
      top: endRect.top + "px",
      left: endRect.left + "px",
    });
  });
}

defineExpose({ renderComponent });
</script>

<style></style>
