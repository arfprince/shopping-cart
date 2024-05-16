import './style.css'

import function setCart(cart) {
    localStorage.setItem("cart",JSON.stringify(cart));
}

import function getCart() {
    const value=localStorage.getItem("cart");
    return JSON.parse(value);
}
function initialize() {
    
}
window.addEventListener("load",()=>{
    initialize();
});