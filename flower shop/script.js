// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const cartItems = []; //Array to store cart item
  const cartList = document.getElementById("cart-items"); // Element where cart items will be listed
  const cartCount = document.getElementById("cart-count"); // Elements to show the number of items in cart 

  // Select all "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".best-selling-card");  // Find the closest product card
      const name = card.querySelector("h4").textContent;  // Get product name
      const price = card.querySelector("p").textContent;  // Get product price

      // Add item to cart 
      cartItems.push({ name, price });

      // Update cart count
      cartCount.textContent = cartItems.length;

      // Update cart item list below
      renderCart();
    });
  });

  function renderCart() {
    cartList.innerHTML = "";
    cartItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price}`;
      cartList.appendChild(li);
    });
  }
});

// ---- Category Carousel ----

  let currentIndex = 0;

  function scrollCarousel(direction) {
    const carousel = document.getElementById("categoryCarousel");
    const cards = carousel.querySelectorAll(".category-card");
    const visibleCards = 2;
    const totalCards = cards.length;
    const maxIndex = totalCards - visibleCards;

    currentIndex += direction * visibleCards;

    // Clamp currentIndex between 0 and maxIndex
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

    const cardWidth = cards[0].offsetWidth + 32; // 260px + 2rem gap
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    // Track if anything matched
    let productMatched = false;
    let categoryMatched = false;

    // Best Selling Products
    const bestSellingCards = document.querySelectorAll(".best-selling-card");
    bestSellingCards.forEach(card => {
      const title = card.querySelector("h4").textContent.toLowerCase();
      if (query && title.includes(query)) {
        card.style.display = "flex";
        productMatched = true;
      } else if (query && !title.includes(query)) {
        card.style.display = "none";
      } else {
        card.style.display = "flex"; // show all if query is empty
      }
    });

    // Category Cards
    const categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach(card => {
      const title = card.querySelector("h4").textContent.toLowerCase();
      if (query && title.includes(query)) {
        card.style.display = "block";
        categoryMatched = true;
      } else if (query && !title.includes(query)) {
        card.style.display = "none";
      } else {
        card.style.display = "block"; // show all if query is empty
      }
    });

    // If query doesn't match any product, don't hide categories
    if (!productMatched && query) {
      bestSellingCards.forEach(card => card.style.display = "none");
    }

    if (!categoryMatched && query) {
      categoryCards.forEach(card => card.style.display = "none");
    }
  });
});

  const cards = document.querySelectorAll('.best-selling-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
