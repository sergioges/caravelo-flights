import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import QuotaManager from "../../components/QuotaManager.vue";
import { createI18n } from "vue-i18n";
import es from "../../locales/es.json";
import en from "../../locales/en.json";

// Mock for Pinia and storeToRefs
vi.mock("pinia", async () => {
  const actual = await vi.importActual("pinia");
  return {
    ...actual,
    storeToRefs: vi.fn(() => ({
      quota: { value: 1 },
      originalQuota: { value: 1 },
      loading: { value: false },
      snackbar: { value: { show: false, message: "", color: "success" } },
    })),
  };
});

// Mock for the store
vi.mock("../../stores/quotes", () => ({
  useQuotesStore: vi.fn(() => ({
    saveQuota: vi.fn(),
  })),
}));

const i18n = createI18n({
  legacy: false,
  locale: "es",
  messages: { es, en },
});

describe("QuotaManager", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(QuotaManager, {
      global: {
        plugins: [i18n],
        stubs: {
          "v-btn": true,
          "v-dialog": true,
          "v-snackbar": true,
          "v-card": true,
          "v-card-text": true,
          "v-card-actions": true,
          "v-toolbar": true,
          "v-toolbar-title": true,
          "v-select": true,
          "v-form": true,
          "v-row": true,
          "v-col": true,
          "v-number-input": true,
          "v-spacer": true,
          "v-icon": true,
        },
      },
    });
  });

  it("renders properly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has dialog initially closed", () => {
    expect(wrapper.vm.dialog).toBe(false);
  });
});
