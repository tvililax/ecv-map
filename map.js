// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 48.851245;
var lon = 2.382195;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 16);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
    var villes = {
        "ECV Digital": { "lat": lat, "lon": lon },
        "Bluebird": { "lat": 48.851323, "lon": 2.380601 },
        "Osteria Ferrara": { "lat": 48.8512838, "lon": 2.3821977 },
        "Les Funambules Paris": { "lat": 48.8510818, "lon": 2.3832197 },
        "Le Mansouria": { "lat": 48.850588, "lon": 2.3834752 },
        "En attendant l'or": { "lat": 48.850242, "lon": 2.382192 },
        "Le bidule": { "lat": 48.850244, "lon": 2.383676 },
        "Les blouses blanches": { "lat": 48.8500948, "lon": 2.3820225 }
    };
for (ville in villes) {
    var marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte);
    // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
    marker.bindPopup(ville);
}  
}
window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap(); 
};