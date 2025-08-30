<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const language = ref("es");

watch(language, (val) => {
  locale.value = val;
});
</script>

<template>
  <v-radio-group v-model="language">
    <template v-slot:label>
      <div>{{ $t("languageSelector.label.language") }}</div>
    </template>
    <v-radio value="es">
      <template v-slot:label>
        <div>
          <strong class="text-success">{{
            $t("languageSelector.label.es")
          }}</strong>
        </div>
      </template>
    </v-radio>
    <v-radio value="en">
      <template v-slot:label>
        <div>
          <strong class="text-primary">{{
            $t("languageSelector.label.en")
          }}</strong>
        </div>
      </template>
    </v-radio>
  </v-radio-group>
</template>
