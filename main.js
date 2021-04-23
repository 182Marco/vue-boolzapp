const app = new Vue({
  el: `#app`,
  data: {
    x: [],
    y: '',
    z: false,
  },
  watch: {
    x() {
      this.a(), this.b();
    },
  },
  mounted() {
    this.a();
  },
  methods: {
    a(i) {
      console.log(`ciao`);
    },
    b(i) {},

    c(i) {},
  },
});
