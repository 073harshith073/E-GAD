document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.querySelector(".cart-items");
    const totalPrice = document.querySelector("#total-price");

    let cart = [];
    
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            const product = document.querySelectorAll(".product")[index];
            const productName = product.querySelector("h2").textContent;
            const productPrice = product.querySelector(".price").textContent;
            const cartItem = document.createElement("li");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <span>${productName}</span>
                <span>${productPrice}</span>
            `;
            cartItems.appendChild(cartItem);

            const price = parseFloat(productPrice.replace("$", ""));
            cart.push(price);

            const total = cart.reduce((acc, current) => acc + current, 0).toFixed(2);
            totalPrice.textContent = `$${total}`;
        });
    });

    document.getElementById("checkout").addEventListener("click", function() {
        alert("Thank you for your purchase!");
        cartItems.innerHTML = "";
        totalPrice.textContent = "$0.00";
        cart = [];
    });
});
