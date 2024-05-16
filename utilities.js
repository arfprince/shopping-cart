export function setCart(cart) {
    localStorage.setItem("cart",JSON.stringify(cart));
}
export function getCart() {
    const value=localStorage.getItem("cart");
    return JSON.parse(value);
}