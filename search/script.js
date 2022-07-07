let div = document.getElementById("div1")
let searchBar = document.getElementsByClassName("searchBar")[0]

let productsInSearch = [];

searchBar.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) { // key code of the keybord key
        //console.log(searchBar.value)
        event.preventDefault();
        let value = event.target.value.toLowerCase();
        console.log(value)
        console.log(productsInSearch)
        fetch('products.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(product => {
        if (product.category.includes(value)|| product.name.includes(value)) {

            html += `<div class = "product-item">
                                    <div class = "product-img">
                                        <img src = "${product.imgSrc}" alt = "product image" >
                                        <button type = "button" class = "add-to-cart-btn">
                                            <i class = "fas fa-shopping-cart"></i>Add To Cart
                                        </button>
                                    </div>
                                    <div class = "product-content">
                                        <h3 class = "product-name">${product.name}</h3>
                                        <span class = "product-category">${product.category}</span><br>
                                        <p class = "product-price-old">${product.price}</p><br>
                                        <p class = "product-price">${product.sale}</p>
                                    </div>
                                </div>`
                                div.innerHTML = html;

        }
    })})}})

 

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        productsInSearch = data.map(product => {
            return { name: product.name, price: product.price, category: product.category }
        })
        

    })

// function search() {
//     fetch('products.json')
//         .then(response => response.json())
//         .then(data => {
//             let html = '';
//             data.forEach(product => {
//                 if (product.category == searchBar.value || product.name == searchBar.value) {

//                     html += `<div class = "product-item">
//                         <div class = "product-img">
//                             <img src = "${product.imgSrc}" alt = "product image" >
//                             <button type = "button" class = "add-to-cart-btn">
//                                 <i class = "fas fa-shopping-cart"></i>Add To Cart
//                             </button>
//                         </div>
//                         <div class = "product-content">
//                             <h3 class = "product-name">${product.name}</h3>
//                             <span class = "product-category">${product.category}</span><br>
//                             <p class = "product-price-old">${product.price}</p><br>
//                             <p class = "product-price">${product.sale}</p>
//                         </div>
//                     </div>`

//                 }
//             });
//             div.innerHTML = html;
//         })
//         .catch(error => {
//             alert(`product live server or local server`);
//             //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
//         })

// }
// search()


// const userCardTemplate = document.querySelector("[data-user-template]")
// const userCardContainer = document.querySelector("[data-user-cards-container]")
// const searchInput = document.querySelector("[data-search]")

// let users = []

// searchInput.addEventListener("input", e => {
//   const value = e.target.value.toLowerCase()
//   users.forEach(user => {
//     const isVisible =
//       user.name.toLowerCase().includes(value) ||
//       user.category.toLowerCase().includes(value)
//     user.element.classList.toggle("hide", !isVisible)
//   })
// })

// fetch("products.json")
//   .then(res => res.json())
//   .then(data => {
//     users = data.map(user => {
//       const card = userCardTemplate.content.cloneNode(true).children[0]
//       const header = card.querySelector("[data-header]")
//       const body = card.querySelector("[data-body]")
//       header.textContent = user.name
//       body.textContent = user.email
//       userCardContainer.append(card)
//       return { name: user.name,category: user.category, element: card }
//     })
//   })
