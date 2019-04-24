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
        <Dialog/>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
import YandexMap from "./components/YandexMap";
import Dialog from "./components/DialogTools";

export default {
  name: "App",
  components: {
    YandexMap,
    Dialog
  },
  data() {
    return {
      krd: [45.087145, 38.991338],
      z: 5
    };
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
