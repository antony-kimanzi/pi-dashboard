// Initial coordinates (center the map)
const initialCoords = [40.7128, -74.0060]; // New York

// Initialize the map
const map = L.map('map').setView(initialCoords, 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map
let marker = L.marker(initialCoords).addTo(map);

// Mock API data
function fetchTruckData() {
    const mockData = {
        gps: {
            lat: 40.730610,
            lon: -73.935242
        },
        weight: 8200 // in kilograms
    };

    const { lat, lon } = mockData.gps;
    marker.setLatLng([lat, lon]);
    map.setView([lat, lon], 13);

    document.getElementById('gps-data').innerText = `Lat: ${lat}, Lon: ${lon}`;
    document.getElementById('weight-data').innerText = `${mockData.weight} kg`;

    setTimeout(fetchTruckData, 5000);
}

fetchTruckData();

// Sidebar Collapse Logic
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');
const sidebarToggle = document.getElementById('sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeToggle.classList.replace('fa-sun', 'fa-moon');
    }
});
