import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  metaInfo: {
    title: "Halaman Finance Account"
  },
  computed: {
    ...mapGetters({
      accounts: "account/SELECT_ACCOUNTS",
      selectLoading: "account/SELECT_LOADING"
    }),
    listLoading() {
      return (this as any).selectLoading("list");
    },
    actionLoading() {
      return (this as any).selectLoading("action");
    }
  },
  methods: {
    ...mapActions({
      fetchAccounts: "account/FETCH_ACCOUNT"
    }),
    ...mapMutations({
      openModal: "app/SET_GLOBAL_MODAL"
    }),
    fetchData() {
      (this as any).fetchAccounts({
        sort_field: "created_at",
        sort_type: 1
      });
    },
    onAddAccount() {
      (this as any).openModal({
        visible: true,
        hasHead: true,
        deviceType: "desktop",
        component: "SectionAccountForm",
        contentStyle: {
          "max-width": "500px",
          "min-width": "500px"
        },
        title: "Tambah Account Finansial"
      });
    }
  },
  mounted() {
    (this as any).fetchData();
  }
};
