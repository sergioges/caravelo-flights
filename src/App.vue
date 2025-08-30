<script setup>
import QuotaManager from './components/QuotaManager.vue'
import HttpCodeSelector from './components/HttpCodeSelector.vue';
import LanguageSelector from './components/LanguageSelector.vue';
</script>

<template>
  <v-app>
  <div class="wrapper">
      <HttpCodeSelector class="code-select" />
      <div class="container">
        <v-icon size="64">mdi-airplane-edit</v-icon>
        <h1>{{ $t('app.label.title') }}</h1>
        <QuotaManager />
        <LanguageSelector class="mt-4" />
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.code-select {
  position: fixed;
  top: 24px;
  right: 24px;
  width: 320px;
  z-index: 1000;
}

.container {
  position: relative;
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
