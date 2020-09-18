import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import { mapActions, mapGetters } from "vuex";
import jwtDecode from "jwt-decode";

export default {
  components: {
    Popper
  },
  computed: {
    ...mapGetters({
      token: "auth/TOKEN"
    }),
    username() {
      const tokenObj = jwtDecode((this as any).token);
      return tokenObj.client_id;
    }
  },
  methods: {
    ...mapActions({
      logout: "auth/LOGOUT"
    }),
    onLogout() {
      (this as any).logout();
    }
  }
};
