import './style.css'
import { setCart } from "./cart";

function initialize() {
    const value=localStorage.getItem("cart");
    if(!value){
        const initialCart = {
            items:[],
            discount: 0,
            shipping: 100,
        };
        setCart(initialCart);
        document.querySelector(".cart-total-items").innerHTML=0;
    }else{
        const cart=JSON.parse(value);
        document.querySelector(".cart-total-items").innerHTML=cart.items.length;
    }
}
async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}
function getProductDiv(product) 
{
    const div = document.createElement("div");
    div.innerHTML = ` 
        <div class="card bg-base-100 shadow-xl relative h-32">
            <figure>
              <div class="absolute top-0 right-0 bg-primary w-15 h-12 text-white flex items-center justify-center text-center rounded-bl-xl rounded-tr-xl"> ${product.discountPercentage}% off</div>
              <img src="${product.thumbnail}" alt="iPhone 9" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${product.title}</h2>
              <p>${product.description}.</p>
              <p>$${product.price}</p>
              
            </div>
        </div>
    `;

    const button=document.createElement("button");
    button.innerHTML = `
    <div class="card-actions justify-end">
    <button class="btn btn-primary btn-sm">Add to Card</button></div>`;
    
    div.querySelector(".card-body").appendChild(button);
    
    button.addEventListener("click",()=>{
        const cart=getCart();
        const wasAdded=cart.items.find((currentItem)=>currentItem.id===product.id);

        if(!wasAdded)
        {
            cart.items.push({
                id: product.id,
                title: product.title,
                description: product.description,
                thumbnail: product.thumbnail,
                quantity:1
            });
        }
        else{
            cart.items=cart.items.map((item)=>{
                if(item.id===product.id){
                    return{
                        ...item,
                        quantity: item.quantity+1
                    };
                }
                return item;
            });
        }
        setCart(cart);
        document.querySelector(".cart-total-items").innerHTML=cart.items.length;
    });
    return div;
}

async function randerProducts() {
    const products = await getProducts();
    const divProducts=document.querySelector(".products");  
    

    for(let i=0;i<products.length;i++){
        divProducts.appendChild(getProductDiv(products[i]));
    }
}

window.addEventListener("load",()=>{
    initialize();
    randerProducts();
});
