const img1 = document.getElementById("img-1"); // Access the first element
const thumbnails = document.querySelectorAll("#tumbnail");
const decrement = document.getElementById("minus");
const quantityDisplay = document.getElementById("quantity");
const increment = document.getElementById("sum");
const  cart = document.getElementById("cart-button")
let quantity = 0

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    img1.src = thumbnail.src;
  });
});

increment.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

decrement.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

cart.addEventListener('click', () =>{
    quantityDisplay.textContent =1
})

