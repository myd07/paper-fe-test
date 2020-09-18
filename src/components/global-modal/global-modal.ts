import { mapActions, mapGetters } from "vuex";

// COMPONENT IMPORT

export default {
  components: {},
  computed: {
    ...mapGetters({
      getModalConfig: "app/GET_GLOBAL_MODAL"
    }),
    componentName() {
      return (this as any).getModalConfig.component;
    },
    canBeRendered() {
      return true;
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
