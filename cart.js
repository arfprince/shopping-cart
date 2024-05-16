import './style.css'
import { getCart,setCart } from "./utilities";

function initialize() {
    const cart=getCart();
    document.querySelector(".cart-total-items").innerHTML=cart.items.length;
}
function getCartRow(item) {
    const tr=document.createElement("tr");
    tr.innerHTML=`
        <td>
        <div class="flex items-center gap-3">
        <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
            <img src="${item.thumbnail}" alt="Avatar Tailwind CSS Component" />
            </div>
        </div>
        <div>
            <div class="font-bold">${item.title}</div>
        </div>
        </div>
        </td>
        <td>
            $${item.price}
            <br/>
        </td>
        <td>
            <input type="number" value="${item.quantity}" class="input input-bordered w-32 max-w-xs" />
        </td>
        <th>
            ${item.price}
        </th>
    `;
    return tr;
}
function randerCart(){
    const cart=getCart();
    const cartItems = document.querySelector(".cart-items");

    for(let i=0;i<cart.items.length;i++)
    {
        const item=cart.items[i];
        console.log(item);
        cartItems.appendChild(getCartRow(item));
    }
}
window.addEventListener("load",()=>{
    initialize();
    randerCart();
    console.log("loaded");
});
