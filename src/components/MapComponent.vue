<template>
    <div id="map"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS

export default {
    name: 'MapComponent',
    mounted() {
        // Initialize the map
        const map = L.map('map').setView([60.45248173770098, 22.278357641222645], 14);

        // Set up the OSM layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Define a custom icon using a Font Awesome syringe icon
        const mapPin = L.divIcon({
            html: '<i class="fas fa-syringe" style="color: var(--green); font-size: 24px;"></i>',
            iconSize: [24, 24],
            className: 'custom-div-icon'
        });

        // Add markers to the map
        const places = [
            { coords: [60.45452362333769, 22.28447076779865], name: 'University of Turku', des: 'Our beautiful campus.' },
            { coords: [60.45175556124348, 22.266711651001586], name: 'City center', des: 'Market square.' },
            { coords: [60.45088487114809, 22.26861236235508], name: 'Scandic Hamburger Börs', des: 'Academic dinner party!' },
            { coords: [60.45435489893516, 22.287092806516064], name: 'Unica Assarin ullakko', des: 'Here you can eat!' },
            { coords: [60.45248173770098, 22.278357641222645], name: 'Turku Cathedral', des: 'Some old church that Turku is famous for.' }
        ];

        places.forEach(place => {
            const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.coords[0]},${place.coords[1]}`;
            const popupContent = `<b>${place.name}</b><br><p>${place.des}</p><a href="${googleMapsUrl}" target="_blank">Get Directions</a>`;

            L.marker(place.coords, { icon: mapPin })
                .addTo(map)
                .bindPopup(popupContent);
        });
    }
};
</script>

<style scoped>
#map {
    width: 80%;
    height: 400px;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    border: 3px solid var(--green)
}

.custom-div-icon {
    background: transparent;
    border: none;
}
</style>