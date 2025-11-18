<template>
  <div ref="container" class="invisible absolute pointer-events-none">
    <component :is="component" v-if="component" />
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, nextTick } from "vue";
import router from "../router/index.ts";

const container = ref();
const component = shallowRef();

async function renderComponent(comp: any, startRect: DOMRect, route: string) {
  component.value = comp;
  await nextTick();
  const child = container.value?.firstElementChild;

  const endRect = child.getBoundingClientRect();
  component.value = null;

  const clone = document.createElement("div");
  Object.assign(clone.style, {
    width: startRect.width + "px",
    height: startRect.height + "px",
    position: "fixed",
    top: startRect.top + "px",
    left: startRect.left + "px",
    background: "white",
  });
  document.body.appendChild(clone);

  const animation = clone.animate(
    [
      {
        width: startRect.width + "px",
        height: startRect.height + "px",
        top: startRect.top + "px",
        left: startRect.left + "px",
      },
      {
        width: endRect.width + "px",
        height: endRect.height + "px",
        top: endRect.top + "px",
        left: endRect.left + "px",
      },
    ],
    { duration: 500, easing: "ease-in-out", fill: "forwards" }
  );

  await animation.finished;

  router.push(`/${route}`);
  document.body.removeChild(clone);
}

defineExpose({ renderComponent });
</script>

<style></style>
