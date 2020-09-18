export default {
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    buttonType: {
      type: String,
      required: true,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    isLoading() {
      return (this as any).loading;
    },
    hasContentSlot() {
      return (this as any).$slots.content;
    }
  },
  methods: {
    handleClick() {
      if ((this as any).buttonType === "button") {
        (this as any).$emit("onClick");
      }
    }
  }
};
