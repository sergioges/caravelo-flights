<script setup>
import { useQuotesStore } from "../stores/quotes";
import { storeToRefs } from "pinia";

const quotesStore = useQuotesStore();
const { code } = storeToRefs(quotesStore);

const codes = [
  { title: "200 OK", value: 200 },
  { title: "201 Created", value: 201 },
  { title: "400 Bad Request", value: 400 },
  { title: "401 Unauthorized", value: 401 },
  { title: "404 Not Found", value: 404 },
  { title: "500 Internal Server Error", value: 500 },
];
</script>

<template>
  <v-select
    v-model="code"
    :items="codes"
    :label="$t('httpCodeSelector.label.title')"
    hide-details="true"
  />
</template>
