<template>
  <div id="wrapper">
    <div :style="{ height: height + 'px' }" id="map"></div>
  </div>
</template>

<script>
import { injectYandexMap, initMap } from "./yandex.js";
export default {
  name: "YandexMap",
  data() {
    return {
      msg: "Yandex карта"
    };
  },
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
    //...mapGetters(["getSelectDatas", "getSelectOnly"])
  },
  mounted() {
    injectYandexMap()
      //.then(initMap(this.center, this.zoom, this.getSelectDatas))
      .then(initMap(this.center, this.zoom, this.getSelectOnly))
      .then(() => {
        console.log("d");
      });
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
