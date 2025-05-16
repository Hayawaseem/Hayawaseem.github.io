document.addEventListener("DOMContentLoaded", function () {
  // Heading fade-in
  const heading = document.querySelector(".fade-in-heading");
  if (heading) heading.classList.add("fade-in");

  // Cart logic
  let cartCount = 0;
  const cartCountSpan = document.getElementById('cart-count');
  const addButtons = document.querySelectorAll('.add-btn');

  addButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartCountSpan.textContent = cartCount;
    });
  });
});
