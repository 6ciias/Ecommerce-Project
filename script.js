// Product Slider //

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

//  SETTING UP THE JSON. 

// We start our code with an ajax request to fetch the data from the JSON file.

// Create a new xmlhttp-request object

let http = new XMLHttpRequest();

// the variable http holds now all methods and properties of the object

// we prepare the request with the open() method.

http.open('get', 'products.json', true);
//  the furst argument sets the http method
// the second argument passes the file where the data is stored
// last keyword as true sets the request to be async

// next we send the request
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);
        let output = "";
        for(let item of products){
           output += `
              <div class="product">
                 <img src="${item.image}" alt="${item.description}">
                 <p class="title">${item.title}</p>
                 <p class="description">${item.description}</p>
                 <p class="price">
                    <span>${item.price}</span>
                    <span>€</span>
                 </p>
                 <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
              </div>
           `;
        }
        // Here we target the products container and add the data that the output variable holds
        document.querySelector(".products").innerHTML = output;
     }
  }