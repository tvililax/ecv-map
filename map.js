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
    var villes = [
        {
            "name" : "Bluebird",
            "category" : "bar",
            "latitude" : "48.851323",
            "longitude" : "2.380601"
        },
        {
            "name" : "Osteria Ferrara",
            "category" : "restaurant",
            "latitude" : "48.8512838",
            "longitude" : "2.3821977"
        },
        {
            "name" : "Les Funambules Paris",
            "category" : "restaurant",
            "latitude" : "48.8510818",
            "longitude" : "2.3832197"
        },
        {
            "name" : "Le Mansouria",
            "category" : "restaurant",
            "latitude" : "48.8512949",
            "longitude" : "2.3826164"
        },
        {
            "name" : "En attendant l'or",
            "category" : "restaurant",
            "latitude" : "48.850588",
            "longitude" : "2.3834752"
        },
        {
            "name" : "Le bidule",
            "category" : "bar",
            "latitude" : "48.850244",
            "longitude" : "2.383676"
        },
        {
            "name" : "Les blouses blanches",
            "category" : "bar",
            "latitude" : "48.8500948",
            "longitude" : "2.3820225"
        }
    ];

    const content = document.querySelector('#content');

    for (ville of villes) {
        var marker = L.marker([ville.latitude, ville.longitude]).addTo(macarte);
        marker.bindPopup(`${ville.category} - ${ville.name}`) 
    }

}
window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap(); 
};