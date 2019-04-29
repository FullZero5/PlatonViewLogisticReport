<template>
  <div id="wrapper">
    <div :style="{ height: height + 'px' }" id="map" ref="map"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "YandexMap",
  props: {
    height: {
      type: [String, Number],
      default: 323
    }
  },
  data() {
    return {
      map: null
    };
  },
  computed: {
    ...mapGetters(["getSelectOnly"])
  },
  watch: {
    getSelectOnly() {
      //Удаление
      this.map.geoObjects.removeAll();
      let multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: [[]],
          params: {
            results: 2,
            
            avoidTrafficJams: false
          }
        },
        { boundsAutoApply: true }
      );
      multiRoute.model.setReferencePoints(this.getSelectOnly);
      this.map.geoObjects.add(multiRoute);
    }
  },
  mounted() {
    // Установить скрипты для использования яндекс карты
    let scriptYandexMap = document.createElement("script");
    scriptYandexMap.setAttribute(
      "src",
      "https://api-maps.yandex.ru/2.1/?lang=ru_RU"
    );
    document.head.appendChild(scriptYandexMap);
    // Инициализировать яндекс карту
    scriptYandexMap.addEventListener("load", this.initializeYandexMap);
  },
  methods: {
    initializeYandexMap() {
      ymaps.ready(() => {
        this.map = new ymaps.Map("map", {
          center: [45.087145, 38.991338],
          zoom: 7,
          controls: ["zoomControl"]
        });
      });
    }
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
  border: 1px solid #09c;
  height: 100%;
  width: 100%;
}
</style>