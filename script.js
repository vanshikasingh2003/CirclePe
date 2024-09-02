// script.js

// Simulated data structure for properties (if more are added dynamically in a real scenario)
const properties = [
    {
        id: 'sky-dandelions',
        name: 'Sky Dandelions Apartment',
        location: 'Sector 28, Gurgaon',
        price: '₹ 22,000/month',
        image: 'property1.jpg',
        isFavorited: false
    },
    {
        id: 'wings-tower',
        name: 'Wings Tower',
        location: 'Sector 27, Gurgaon',
        price: '₹ 17,000/month',
        image: 'property2.jpg',
        isFavorited: false
    },
    {
        id: 'wayside-modern',
        name: 'Wayside Modern House',
        location: 'MG Road, Gurgaon',
        price: '₹ 18,000/month',
        image: 'property3.jpg',
        isFavorited: false
    }
];

// Function to handle redirection to property details
function redirectToProperty(propertyId) {
    // Redirect to the new page with the property ID as a query parameter
    window.location.href = `property-details.html?property=${propertyId}`;
}

// Function to initialize the property list based on the data
function renderProperties() {
    const propertyList = document.getElementById('property-list');
    propertyList.innerHTML = ''; // Clear current content

    properties.forEach(property => {
        const propertyItem = document.createElement('div');
        propertyItem.classList.add('property-item');
        propertyItem.setAttribute('data-location', property.location);
        propertyItem.setAttribute('data-name', property.name);
        propertyItem.onclick = () => redirectToProperty(property.id); // Attach the click handler

        const img = document.createElement('img');
        img.src = property.image;
        img.alt = property.name;

        const propertyInfo = document.createElement('div');
        propertyInfo.classList.add('property-info');

        const h3 = document.createElement('h3');
        h3.textContent = property.name;

        const p = document.createElement('p');
        p.innerHTML = `${property.location}<br>${property.price}`;

        propertyInfo.appendChild(h3);
        propertyInfo.appendChild(p);

        const favoriteButton = document.createElement('button');
        favoriteButton.classList.add('property-favorite');
        favoriteButton.innerHTML = property.isFavorited ? '&#9829;' : '&#9825;';
        favoriteButton.style.color = property.isFavorited ? '#ff5a5f' : '#606060';
        favoriteButton.onclick = (event) => toggleFavorite(event, property.id);

        propertyItem.appendChild(img);
        propertyItem.appendChild(propertyInfo);
        propertyItem.appendChild(favoriteButton);

        propertyList.appendChild(propertyItem);
    });
}

// Function to toggle favorite status
function toggleFavorite(event, propertyId) {
    event.stopPropagation(); // Prevent triggering the redirect
    const property = properties.find(p => p.id === propertyId);
    if (property) {
        property.isFavorited = !property.isFavorited;
        renderProperties(); // Re-render the list to update UI
    }
}

// Search functionality
document.getElementById('search-input').addEventListener('input', function() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    const propertyItems = document.querySelectorAll('.property-item');

    propertyItems.forEach(function(item) {
        const name = item.getAttribute('data-name').toLowerCase();
        const location = item.getAttribute('data-location').toLowerCase();
        if (name.includes(searchValue) || location.includes(searchValue)) {
            item.style.display = 'flex';
            item.classList.add('fade-in'); // Optional animation
        } else {
            item.style.display = 'none';
        }
    });
});

// Add fade-in animation to each property item
document.querySelectorAll('.property-item').forEach(item => {
    item.addEventListener('animationend', () => {
        item.classList.remove('fade-in');
    });
});

// Initialize the properties on page load
document.addEventListener('DOMContentLoaded', renderProperties);

// Function to update the period time and recalculate total in wireframe2
function updatePeriod(period) {
    document.querySelectorAll('.period-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const periodMonths = parseInt(period);
    const monthlyPayment = document.getElementById('property-price').textContent;
    document.getElementById('period-time').textContent = period;
    document.getElementById('total-payment').textContent = calculateTotal(monthlyPayment, periodMonths);
}

// Function to calculate total based on monthly payment and period
function calculateTotal(monthlyPayment, periodMonths) {
    const paymentValue = parseInt(monthlyPayment.replace(/[^0-9]/g, ''));
    return `₹ ${paymentValue * periodMonths}`;
}

// Function for the "Pay with Circle" button
function payWithCircle() {
    alert("Payment with Circle initiated!");
}
// Function for the "Get Started" button
function getStarted() {
    const checkbox = document.getElementById('terms-checkbox');
    if (checkbox.checked) {
        alert("Getting Started...");
        // Redirect or perform any other action
    } else {
        alert("Please accept the terms and conditions to proceed.");
    }
}

// Function for the "Go Back" button
function goBack() {
    alert("Going back...");
    // Perform the back navigation or any other action
}
// Function for the "Continue" button
function continueToNextStep() {
    alert("Continuing to the next step...");
    // Redirect or perform any other action
}
