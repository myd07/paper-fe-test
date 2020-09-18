import { mapActions, mapGetters } from "vuex";

// COMPONENT LAZY IMPORT
const SectionAccountForm = () =>
  import("@/components/section-account-form/section-account-form.vue");

export default {
  components: {
    SectionAccountForm
  },
  computed: {
    ...mapGetters({
      getModalConfig: "app/SELECT_GLOBAL_MODAL"
    }),
    componentName() {
      return (this as any).getModalConfig.component;
    },
    canBeRendered() {
      return (this as any).getModalConfig.visible;
    }
  },
  methods: {
    ...mapActions({
      closeModal: "app/CLOSE_GLOBAL_MODAL"
    }),
    handleClose() {
      (this as any).closeModal();
    }
  }
};
