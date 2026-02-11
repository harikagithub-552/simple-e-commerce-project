// Cart array to store items
let cart = [];

// Function to add items to cart
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

// Function to display cart items on cart.html
function displayCart() {
    const cartDiv = document.getElementById("cartItems");
    const totalEl = document.getElementById("total");

    if (!cartDiv || !totalEl) return; // Exit if not on cart page

    // Get cart from localStorage
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartDiv.innerHTML = ""; // Clear previous items
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <p>${item.name} - ₹${item.price} 
            <button onclick="removeItem(${index})">Remove</button></p>
        `;
        cartDiv.appendChild(itemDiv);
    });

    totalEl.innerText = "Total: ₹" + total;
}

// Function to remove an item
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}
