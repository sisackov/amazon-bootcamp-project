/* Cart Counter */
document.querySelector('#add-to-cart-button').onclick = function () {
    let cartCount = document.querySelector('#nav-cart-count');
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
};
