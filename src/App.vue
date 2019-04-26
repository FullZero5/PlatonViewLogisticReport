<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-layout fill-height>
          <v-flex xs12 align-center justify-center flexbox>
            <YandexMap :center="krd" :zoom="z"/>
          </v-flex>
        </v-layout>
      </v-content>
      <v-layout column class="fab-container">
        <v-date-picker
          locale="ru-ru"
          v-model="date"
          :events="Object.keys(MyEvents)"
          event-color="green"
          v-if="!getLengtData==0"
        ></v-date-picker>
        <FileLoader v-else/>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
import YandexMap from "./components/YandexMap";
import FileLoader from "./components/FileLoader";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    YandexMap,
    FileLoader
  },
  data() {
    return {
      date: "2019-04-01",
      krd: [45.087145, 38.991338],
      z: 5
    };
  },
  watch: {
    date(val) {
      let merged = [].concat.apply([], this.MyEvents[val]);
      this.addToSelect(merged);
    }
  },
  computed: {
    ...mapGetters(["MyEvents", "getLengtData"])
  },
  methods: {
    ...mapActions(["addToSelect"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fab-container {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 50px;
}
</style>
