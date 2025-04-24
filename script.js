function onSubmit (){
    alert ('Form submitted successfully');
    window.location.href = "index.html";
}

const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    function welcomeMsg(name) {
        name = "Customer"
        alert ("Form submitted successfully!");
        window.location.href = "index.html";
    }

   

// Function to add a product to the cart
function addToCart(productName, price) {
    // Get the current cart from localStorage, or initialize an empty array if no cart exists
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add the product to the cart
    cart.push({ name: productName, price: price });
    
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update the cart count displayed on the icon
    updateCartCount();
  
    // Show an alert that the item has been added to the cart
    alert(`${productName} has been added to your cart for Ksh ${price}!`);
  }
  
  // Function to update the cart count on the icon
  function updateCartCount() {
    // Get the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Get the element where the cart count is displayed
    const cartCountElement = document.getElementById('cart-count');
    
    // Update the text content of the cart count element
    if (cartCountElement) {
      cartCountElement.textContent = cart.length; // Set the count to the length of the cart
    }
  }
  
  // Call the updateCartCount function when the page loads to ensure the cart count is updated
  window.addEventListener('DOMContentLoaded', updateCartCount);

//Search functionality
document.addEventListener('DOMContentLoaded', function () {
  //Search functionality
  const searchInput = document.getElementById('searchInput'); // grabs the search input box
  const products = document.querySelectorAll('.product-item'); // grabs all product items on the page
  const noResults = document.getElementById('no-results'); // grabs the “No results found” message element

  searchInput.addEventListener('keyup', filterProducts); // live search
  document.getElementById('searchButton').addEventListener('click', filterProducts); // button search

  function filterProducts() {
    const query = searchInput.value.toLowerCase();
    let anyVisible = false;

    products.forEach(product => {
      const name = product.dataset.name.toLowerCase();
      if (name.includes(query)) {
        product.style.display = 'block';
        anyVisible = true;
      } else {
        product.style.display = 'none';
      }
    });

    if (anyVisible) {
      noResults.classList.add('hidden');
    } else {
      noResults.classList.remove('hidden');
    }
  }
});

 
  