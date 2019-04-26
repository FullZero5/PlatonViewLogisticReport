<template>
  <div id="wrapper">
    <div :style="{ height: height + 'px' }" id="map"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { injectYandexMap, initMap } from "./yandex.js";
export default {
  name: "YandexMap",
  props: {
    center: {
      type: Array,
      default: [55.76, 37.64]
    },
    zoom: {
      type: Number,
      default: 7
    },
    height: {
      type: [String, Number],
      default: 323
    }
  },
  computed: {
    ...mapGetters(["getSelectOnly"])
  },
  mounted() {
    injectYandexMap()
      .then(initMap(this.center, this.zoom, this.getSelectOnly));
  }
};
</script>

<style>
#wrapper {
  display: flex;
  min-height: 100%;
  flex-direction: column;
}
#map {
  flex: 1;
  border: 1px solid orange;
  height: 100%;
  width: 100%;
}
</style>
