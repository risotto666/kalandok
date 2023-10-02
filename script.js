"use strict";
const locations = [
  ["Cambridge", 52.2011619, 0.1311848],
  ["Marseille", 43.2983758, 5.369447],
  ["Side", 36.8115012, 31.3355342],
  ["Budapest", 47.5158814, 19.0094435],
  ["Milan", 45.4770141, 9.1549488],
];

const map = L.map("map").setView([52.2011619, 0.1311848], 5);

/*L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
})*/ L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

for (var i = 0; i < locations.length; i++) {
  let marker = new L.marker([locations[i][1], locations[i][2]])
    .bindPopup(L.popup({ closeOnClick: true, autoClose: false }))
    .bindTooltip(locations[i][0], {
      permanent: true,
      className: "szoveg",
      direction: "right",
    })
    .openPopup()

    .setPopupContent(`<img class="kep" src="${locations[i][0]}.jpg">`)

    .addTo(map);
}
const options = document.querySelectorAll(".option");
const Cambridge = [52.2011619, 0.1311848];
const Marseille = [43.2983758, 5.369447];
const Side = [36.8115012, 31.3355342];
const Budapest = [47.5158814, 19.0094435];
const Milan = [45.4770141, 9.1549488];
options.forEach((option) =>
  option.addEventListener("click", function (e) {
    const city = e.target.textContent;
    if (city === "Cambridge") {
      map.flyTo(Cambridge, 12, { pan: { animate: true, duration: 0.5 } });
    }
    if (city === "Marseille") {
      map.flyTo(Marseille, 12, { pan: { animate: true, duration: 0.5 } });
    }
    if (city === "Side") {
      map.flyTo(Side, 12, { pan: { animate: true, duration: 0.5 } });
    }
    if (city === "Budapest") {
      map.flyTo(Budapest, 12, { pan: { animate: true, duration: 0.5 } });
    }
    if (city === "Milan") {
      map.flyTo(Milan, 12, { pan: { animate: true, duration: 0.5 } });
    }
  })
);

const text = document.querySelector(".text");

///terkepre kattintva uj kaland hozza adasa
map.on("click", function (e) {
  const { lat, lng } = e.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        permanent: true,
        autoClose: false,
        closeOnClick: false,
        className: "szoveg",
      })
    )
    .setPopupContent(`${text.value}`)
    .openPopup();

  text.classList.remove("hide");
});
