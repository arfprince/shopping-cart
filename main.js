import './style.css'

async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}

function getProductDiv(product) {
    const div =document.createElement("div");
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
    button.innerHTML=`<div class="card-actions justify-end">
    <button class="btn btn-primary btn-sm">Add to Card</button></div>`;
    button.addEventListener("click",()=>{
        console.log(product);
    });
    div.querySelector(".card-body").appendChild(button);

    return div;
}

async function randerProducts() {
    const products = await getProducts();
    const divProducts=document.querySelector(".products");  
    
    const value = localStorage.getItem("cart");
    if(!value){
        const initialCart = {
            items:[],
            discount: 0,
            shipping: 100,
        };
        localStorage.setItem("cart",JSON.stringify(initialCart));
    }
    console.log(value);

    for(let i=0;i<products.length;i++){
        divProducts.appendChild(getProductDiv(products[i]));
    }

}

randerProducts();