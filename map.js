// On initialise la latitude et la longitude de Paris (centre de la carte)
var macarte = null;
var lat = 48.851245;
var lon = 2.382195;
const close = document.querySelector('#close');
const content = document.querySelector('#content');
const title = document.querySelector('#content h1');
const category = document.querySelector('#content p');
close.addEventListener('click', () => {
    content.style.left = '-100%';
});

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
    var markersLayer = L.featureGroup().addTo(macarte);
    var villes = [
        {
            "name" : "ECV Digital",
            "category" : "ecole",
            "latitude" : "48.8510000",
            "longitude" : "2.3826164"
        },
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

    const restaurant = L.icon({
        iconUrl : 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png',
        iconSize : [65, 65],
        iconAnchor: [22,60],         
    });
    const school = L.icon({
        iconUrl : 'https://image.flaticon.com/icons/svg/33/33622.svg',
        iconSize : [43, 43],
        iconAnchor: [22,60],         
    });
 

    for (ville of villes) {
        if (ville.category === "restaurant") {
            var marker = L.marker([ville.latitude, ville.longitude], {icon: restaurant}).addTo(markersLayer);
        } else if (ville.category === "ecole") {
            var marker = L.marker([ville.latitude, ville.longitude], {icon: school}).addTo(markersLayer);
        } else {
            var marker = L.marker([ville.latitude, ville.longitude]).addTo(markersLayer);
        }
        marker.options.name = ville.name;
        marker.options.category = ville.category;
    }
    markersLayer.on("click", ({ layer : { options } })  => {
        content.style.left = 0;
        title.textContent = options.name;
        category.textContent = options.category;
    });

}
window.onload = function(){
    initMap(); 
};