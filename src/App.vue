<script setup lang="ts">
import Home from "./layout/Home.vue";
import PEditor from "./components/editor/PEditor.vue";
import ContextMenu from "@/components/contextMenu/ContextMenu.vue";
import '@/plugins/contextMenu'
</script>

<template>
  <Home>
      <p-editor/>
  </Home>
  <ContextMenu/>
</template>

<style scoped>
</style>
