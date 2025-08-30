import { ref } from "vue";
import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";

export const useQuotesStore = defineStore("quotes", () => {
  const { t } = useI18n();

  // STATE
  const code = ref(200);
  const quota = ref(0);
  const originalQuota = ref(0);
  const loading = ref(false);
  const snackbar = ref({ show: false, message: "", color: "success" });

  // ACTIONS
  async function saveQuota(canSave) {
    if (!canSave) return;
    loading.value = true;
    try {
      const res = await fetch(`https://mock.httpstatus.io/${code.value}`, {
        method: "GET",
      });
      if (!res.ok) throw new Error(t("saveQuota.label.error"));
      snackbar.value = {
        show: true,
        message: t("saveQuota.label.success"),
        color: "success",
      };
      originalQuota.value = quota.value;
    } catch (e) {
      snackbar.value = {
        show: true,
        message: t("saveQuota.label.error"),
        color: "error",
      };
    } finally {
      loading.value = false;
    }
  }

  return {
    code,
    quota,
    originalQuota,
    loading,
    snackbar,
    saveQuota,
  };
});
