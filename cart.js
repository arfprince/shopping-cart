import './style.css'
import { getCart,setCart } from "./utilities";

function initialize() {
    const cart=getCart();
    document.querySelector(".cart-total-items").innerHTML=cart.items.length;
}
function totalPrice() {
    const cart=getCart();
    let total=0,discount=0;
    for(let i=0;i<cart.items.length;i++)
    {
        total+=cart.items[i].price*cart.items[i].quantity;
        discount+=(cart.items[i].price*(cart.items[i].discount/100))*cart.items[i].quantity;
    }
    if(total>0) total+=100;
    
    document.querySelector("#sub-total").innerHTML=`$${total}`;
    document.querySelector("#discount").innerHTML=`$${Math.ceil(discount)}`;
    document.querySelector("#total").innerHTML=`$${Math.floor(total-discount)}`;
}
function getCartRow(item) {
    const tr=document.createElement("tr");
    tr.innerHTML=`
        <td>
        <div class="flex items-center gap-3">
        <div class="avatar">
            <div class="mask mask-squircle h-10 w-10">
            <img src="${item.thumbnail}" alt="Avatar Tailwind CSS Component" class="h-10 w-10" />
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
            totalPrice();
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
    totalPrice();
}
window.addEventListener("load",()=>{
    initialize();
    randerCart();
});
