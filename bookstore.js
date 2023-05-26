// Get the catalog data from a JSON file
fetch('catalog.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the catalog data
  });

// Add event listeners to the cart buttons
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Add the book to the cart
  });
});

// Update the cart total on the checkout page
const cartTotal = document.querySelector('.cart-total');
cartTotal.textContent = '$99.99'; // Replace with the actual cart total
