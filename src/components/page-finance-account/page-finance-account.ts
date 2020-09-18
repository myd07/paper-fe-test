import { mapActions, mapGetters } from "vuex";

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
    fetchData() {
      (this as any).fetchAccounts({
        sort_field: "created_at",
        sort_type: 1
      });
    }
  },
  mounted() {
    (this as any).fetchData();
  }
};
