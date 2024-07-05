<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS

const places = [
  { coords: [60.45452362333769, 22.28447076779865], name: 'University of Turku', des: 'Our beautiful campus.' },
  { coords: [60.454877, 22.282245], name: 'Åbo Akademi Aurum', des: 'This is where our main events happen.' },
  { coords: [60.45088487114809, 22.26861236235508], name: 'Scandic Hamburger Börs', des: 'Academic dinner party!' },
  { coords: [60.45248173770098, 22.278357641222645], name: 'Turku Cathedral', des: 'Magnificent Gothic cathedral and the national shrine of Finland, renowned for its historical significance and striking architecture.' }
];

const food = [
  { coords: [60.45435489893516, 22.287092806516064], name: 'Unica Assarin ullakko', des: 'Here you can eat!' },
  { coords: [60.45487287768987, 22.28252308376896], name: 'Kårkafé Aurum', des: 'Here you can eat!' },
  { coords: [60.45138013460424, 22.271984056727053], name: 'Unica Kulma', des: 'Chill student friendly restaurant and bar.' }
];

const hotels = [
  { coords: [60.451282107657256, 22.25881279449703], name: 'Omena', des: 'Omena hotell in Humalistonkatu.' },
  { coords: [60.450730520064766, 22.26937095437863], name: 'Omena', des: 'Omena hotell in Kauppisakatu.' },
  { coords: [60.45225868068006, 22.272120253613718], name: 'Scandic Julia', des: 'Scandic hotell in Eerikinkatu 4.' },
  { coords: [60.45088487114809, 22.26861236235508], name: 'Scandic Börs', des: 'Scandic hotell in Kauppiaskatu.' },
  { coords: [60.45084928869712, 22.26175288728213], name: 'Scandic Plaza', des: 'Scandic hotell in Yliopistonkatu.' },
  { coords: [60.447769264660614, 22.25843069446737], name: 'Scandic Atrium', des: 'Scandic hotell in Eerikinkatu 28-30.' },
  { coords: [60.46046591499518, 22.290469882545306], name: 'Holiday Club Turku Caribia', des: 'Caribia spa hotell.' }
];

const cityTour = [
  { coords: [60.45175556124348, 22.266711651001586], name: 'City center', des: 'Market square.' },
  { coords: [60.45379540877991, 22.260749162475314], name: 'Puolalanpuisto', des: 'Puolalanmäki park.' },
  { coords: [60.44885657189634, 22.24831367334181], name: 'Mikael´s church', des: 'Stunning red-brick church built in the Gothic Revival style, featuring a tall spire, intricate architectural details, and a serene interior, making it a prominent landmark in the city.' },
  { coords: [60.44149090050041, 22.24501610011884], name: 'Funikular', des: 'Our famous, sometimes working, funikular.' },
  { coords: [60.44123403839776, 22.24808896934615], name: 'Föri', des: 'Ferry over the river.' },
  { coords: [60.447651091780415, 22.267088386213356], name: 'River boats', des: 'Beautiful river boats filled with bars and restauratns.' },
  { coords: [60.452687033508916, 22.276011918591266], name: 'Church Park Terrace', des: 'Church Park Terrace is a charming outdoor terrace located in a scenic park setting, offering a relaxed atmosphere with picturesque views, ideal for enjoying refreshments and casual gatherings.' }
]

console.log(cityTour)
export default {
  name: 'MapComponent',
  mounted() {
    // Initialize the map
    const map = L.map('map').setView([60.45248173770098, 22.278357641222645], 14);

    // Set up the OSM layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define custom icons
    const mapPin = L.divIcon({
      html: '<i class="fas fa-syringe" style="color:red; font-size:24px;"></i>',
      iconSize: [24, 24],
      className: 'custom-div-icon'
    });

    const foodPin = L.divIcon({
      html: '<i class="material-icons" style="color:green; font-size:24px;">restaurant</i>',
      iconSize: [24, 24],
      className: 'custom-div-icon'
    });

    const hotelPin = L.divIcon({
      html: '<i class="material-icons" style="color:blue; font-size:24px;">hotel</i>',
      iconSize: [24, 24],
      className: 'custom-div-icon'
    });

    const cityTourPin = L.divIcon({
      html: '<i class="	fas fa-camera-retro" style="color:var(--darkBlue); font-size:24px;"></i>',
      iconSize: [24, 24],
      className: 'custom-dic-icon'
    })

    // Add markers function
    const addMarkers = (places, icon) => {
      places.forEach(place => {
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.coords[0]},${place.coords[1]}`;
        const popupContent = `<b>${place.name}</b><br><p>${place.des}</p><a href="${googleMapsUrl}" target="_blank">Get Directions</a>`;

        L.marker(place.coords, { icon })
          .addTo(map)
          .bindPopup(popupContent);
      });
    };

    // Add all markers
    addMarkers(places, mapPin);
    addMarkers(food, foodPin);
    addMarkers(hotels, hotelPin);
    addMarkers(cityTour, cityTourPin);
  }
};
</script>

<style scoped>
#map {
  width: 80%;
  height: 400px;
  margin: 50px auto;
  border: 3px solid var(--darkBlue);
}

.custom-div-icon {
  background: transparent;
  border: none;
}
</style>