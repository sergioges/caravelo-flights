import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LanguageSelector from "../../components/LanguageSelector.vue";
import { createI18n } from "vue-i18n";
import es from "../../locales/es.json";
import en from "../../locales/en.json";

const i18n = createI18n({
  legacy: false,
  locale: "es",
  messages: { es, en },
});

describe("LanguageSelector", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(LanguageSelector, {
      global: {
        plugins: [i18n],
        stubs: {
          "v-radio-group": {
            template:
              '<div class="v-radio-group"><slot></slot><slot name="label"></slot></div>',
            props: ["modelValue"],
            emits: ["update:modelValue"],
          },
          "v-radio": {
            template:
              '<div class="v-radio"><slot></slot><slot name="label"></slot></div>',
            props: ["value"],
          },
        },
      },
    });
  });

  it("renders properly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has a v-radio-group component", () => {
    expect(wrapper.findComponent(".v-radio-group").exists()).toBe(true);
  });

  it("changes language when v-model is updated", async () => {
    await wrapper.vm.$emit("update:modelValue", "en");
    await wrapper
      .findComponent(".v-radio-group")
      .vm.$emit("update:modelValue", "en");

    expect(i18n.global.locale.value).toBe("en");
  });
});
