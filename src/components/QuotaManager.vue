<script setup>
import { ref, computed } from "vue";
import { useQuotesStore } from "../stores/quotes";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

const dialog = ref(false);
const reason = ref("");
const quotesStore = useQuotesStore();
const { saveQuota } = quotesStore;
const { quota, originalQuota, loading, snackbar } = storeToRefs(quotesStore);
const { t } = useI18n();

const addReasons = computed(() => [
  t("addReasons.label.subscriber"),
  t("addReasons.label.airline"),
  t("addReasons.label.compensation"),
  t("common.label.other"),
]);
const removeReasons = computed(() => [
  t("removeReasons.label.cancellation"),
  t("removeReasons.label.password"),
  t("removeReasons.label.booking"),
  t("removeReasons.label.notRenewed"),
  t("common.label.other"),
]);

const quotaRules = computed(() => [
  (v) =>
    (v !== "" && v !== null && v !== undefined) ||
    t("quotaManager.label.required"),
  (v) => v >= 0 || t("quotaManager.label.lessThan"),
  (v) => v <= 3 || t("quotaManager.label.moreThan"),
]);

const canSave = computed(() => {
  return quota.value !== originalQuota.value && reason.value && !loading.value;
});

const reasonOptions = computed(() => {
  if (quota.value > originalQuota.value) return addReasons.value;
  if (quota.value < originalQuota.value) return removeReasons.value;
  return [];
});

function openDialog() {
  dialog.value = true;
  reason.value = "";
}
function closeDialog() {
  dialog.value = false;
  reason.value = "";
  quota.value = originalQuota.value;
}
async function save() {
  await saveQuota(canSave.value);
  closeDialog();
}
</script>

<template>
  <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
    {{ snackbar.message }}
  </v-snackbar>
  <v-dialog v-model="dialog" max-width="700">
    <template #activator="{ props }">
      <v-btn color="primary" v-bind="props" @click="openDialog">
        <v-icon left>mdi-pencil</v-icon>
        {{ $t("quotaManager.label.editFlights") }}
      </v-btn>
    </template>
    <v-card>
      <v-toolbar flat color="primary">
        <v-toolbar-title class="white--text">
          {{ $t("quotaManager.label.title") }}
          <div class="text-caption text--secondary">
            {{ $t("quotaManager.label.subtitle") }}
          </div>
        </v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form" @submit.prevent="save" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-number-input
                v-model.number="quota"
                :rules="quotaRules"
                :min="0"
                :max="3"
                :label="t('quotaManager.label.flightQuantity')"
                control-variant="split"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="reason"
                :items="reasonOptions"
                :label="t('quotaManager.label.issue')"
                :rules="[(v) => !!v || t('quotaManager.label.requiredIssue')]"
                :no-data-text="t('common.label.noData')"
                :disabled="loading"
                required
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          :disabled="!canSave"
          @click="save"
          :loading="loading"
        >
          <v-icon left>mdi-content-save</v-icon>
          {{ $t("common.label.save") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
