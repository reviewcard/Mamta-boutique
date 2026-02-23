const products = [

{
id:1,
name:"Designer Blouse",
price:799,
image:"images/products/blouse1.jpg"
},

{
id:2,
name:"Wedding Lehenga",
price:2499,
image:"images/products/lehenga1.jpg"
}

];



let container = document.getElementById("products");

if(container){

products.forEach(product=>{

container.innerHTML += `

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<a href="product.html?id=${product.id}"
class="btn">

View Product

</a>

</div>

`;

});

}
