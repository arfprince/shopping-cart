import './style.css'

export function setCart(cart) {
    localStorage.setItem("cart",JSON.stringify(cart));
}

export function getCart() {
    const value=localStorage.getItem("cart");
    return JSON.parse(value);
}
function initialize() {
    
}
window.addEventListener("load",()=>{
    initialize();
});