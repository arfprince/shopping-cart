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
            <input type="number" value="${item.quantity}" min="0" class="quantity-input input input-bordered w-24 max-w-xs" />
        </td>
        <td>
            $${item.price*item.quantity}
        </td>
    `;

    const input=tr.querySelector(".quantity-input");
    input.addEventListener("input",(e)=>{
        if(Number.isInteger(e.target.valueAsNumber) && e.target.valueAsNumber>=0){
            //local storage update
            const cart=getCart();
            cart.items=cart.items.map((curItem)=>{
                if(item.id!==curItem.id) return curItem;
                curItem.quantity=e.target.valueAsNumber;
                return curItem;
            });
            setCart(cart);
            // ui update
            randerCart();
        };
    });
    return tr;
}
function randerCart(){
    const cart=getCart();
    const cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML="";
    for(let i=0;i<cart.items.length;i++)
    {
        const item=cart.items[i];
        cartItems.appendChild(getCartRow(item));
    }
}
window.addEventListener("load",()=>{
    initialize();
    randerCart();
});
