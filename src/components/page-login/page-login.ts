import ActionButton from "@/components/action-button/index.vue";
import { required, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";

export default {
  metaInfo: {
    title: "Halaman Login"
  },
  components: {
    ActionButton
  },
  validations: {
    password: {
      required
    },
    username: {
      required
    }
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters({
      loading: "auth/LOADING"
    })
  },
  methods: {
    ...mapActions({
      login: "auth/LOGIN"
    }),
    onSubmit(event: any) {
      const self = this as any;
      self.$v.$touch();
      if (!self.$v.$invalid) {
        self.login({
          username: self.username,
          password: self.password
        });
      } else {
        console.log("form invalid");
      }
    }
  }
};
