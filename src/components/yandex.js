export function injectYandexMap() {
  return new Promise((resolve, reject) => {
    try {
      const fjs = document.getElementsByTagName("script")[0];
      if (document.getElementById("yaMap")) {
        resolve();
        return;
      }
      const js = document.createElement("script");
      js.id = "yaMap";
      js.src = "//api-maps.yandex.ru/2.1/?lang=ru_RU";
      js.onload = resolve;
      js.onerror = reject;

      fjs.parentNode.insertBefore(js, fjs);
    } catch (err) {
      reject(err);
    }
  });
}

export const initMap = (array, int, data) => () => {
  ymaps.ready(() => {
    let multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [[]],
        params: { results: 2 }
      },
      { boundsAutoApply: true, balloonPanelMaxMapArea: 0 }
    );
    multiRoute.model.setReferencePoints([[]]);
    const myMap = new ymaps.Map("map", {
      center: array,
      zoom: int
    });
    myMap.geoObjects.add(multiRoute);
  });
};
