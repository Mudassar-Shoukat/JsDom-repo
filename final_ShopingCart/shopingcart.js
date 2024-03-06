const products = [
    {
      id: 1,
      name: "Laptop",
      price: 800,
      quantity: 10
    },
    {
      id: 2, 
      name: "Smartphone",
      price: 400,
      quantity: 20
    },
    {
      id: 3,
      name: "Headphones",
      price: 50,
      quantity: 50
    },
    {
      id: 4,
      name: "Tablet",
      price: 300,
      quantity: 15
    },
    {
      id: 5,
      name: "Desktop PC",
      price: 1200,
      quantity: 8
    },
    {
      id: 6,
      name: "Digital Camera",
      price: 350,
      quantity: 12
    },
    {
      id: 7,
      name: "Wireless Mouse",
      price: 25,
      quantity: 30
    },
    {
      id: 8,
      name: "External Hard Drive",
      price: 100,
      quantity: 25
    },
    {
      id: 9,
      name: "Gaming Console",
      price: 450,
      quantity: 10
    },
    {
      id: 10,
      name: "Smartwatch",
      price: 150,
      quantity: 18
    },
    {
      id: 11,
      name: "Printer",
      price: 150,
      quantity: 10
    },
    {
      id: 12,
      name: "Portable Speaker",
      price: 80,
      quantity: 25
    },
    {
      id: 13,
      name: "Monitor",
      price: 250,
      quantity: 15
    },
    {
      id: 14,
      name: "Wireless Keyboard",
      price: 40,
      quantity: 20
    },
    {
      id: 15,
      name: "eBook Reader",
      price: 100,
      quantity: 10
    }
];

let cart = []

const productsHTML = products.map(
  (product) => `<div id=card_${product.id} class="product-card">
    <h2 class="product-name">${product.name}</h2>
    <strong>$${product.price}</strong>
    <strong  id="card_${product.id}_price">${product.quantity}</strong>
    <button class="product-btn" id=${product.id}>
      <i class="fa-solid fa-cart-shopping"></i> Add to Cart
    </button>
  </div>`
);


const result = document.querySelector(".result");
result.innerHTML = productsHTML.join("");

function updateCart() {
  const cartHTML = cart.map(
    (item) => `<div class="cart-item">
            <h3>${item.name}</h3>
            <div class="cart-detail"><div class="mid">
                <button onclick={decrItem(${item.id})}>-</button>
                <p>${item.quantity}</p>
                <button onclick={incrItem(${item.id})}>+</button>
            </div>
            <p>$${item.price}</p>
            <button onclick={deleteItem(${item.id})} class="cart-product" id=${item.id}>
            <i class="fa-solid fa-trash-can"></i>
            </button></div>
           </div>`
  );

  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = cartHTML.join("");
}
let num = document.querySelectorAll(".product-btn").length;
for (let i = 0; i <= num; i++) {
  document.querySelectorAll(".product-btn")
  [i].addEventListener("click", function (e) {
    addToCart(products, parseInt(e.target.id));
  });
}
function addToCart(products, id){
  const product = products.find((product) => product.id === id);
  const cartProduct = cart.find((product) => product.id === id);
  if (cartProduct != undefined && product.id == cartProduct.id) {
    incrItem(id);
  } else {
    const productCard = document.getElementById(`card_${product.id}`);
    productCard.style.background ="#EAD196";
    let newItem = {
      ...product,
      quantity: 1,
    };
    cart.unshift(newItem);
  }
  updateCart();
  getTotal(cart);
};

function getTotal(cart) {
  let { totalItem, cartTotal } = cart.reduce(
    (total, cartItem) => {
      total.cartTotal += cartItem.price * cartItem.quantity;
      total.totalItem += cartItem.quantity;
      return total;
    },
    { totalItem: 0, cartTotal: 0 }
  );
  const totalItemsHTML = document.querySelector(".noOfItems");
  totalItemsHTML.innerHTML = `${totalItem} items`;
  const totalAmountHTML = document.querySelector(".total");
  totalAmountHTML.innerHTML = `$${cartTotal}`;
 
}

function incrItem(id)
 {
  const item = cart.find((item) => item.id === id);
  item.quantity += 1;
  const product = products.find((product) => product.id === item.id);

  if (product.quantity >= item.quantity) {   
    // product.quantity = product.quantity - 1;
   (document.getElementById(`card_${product.id}_price`).innerHTML = product.quantity-item.quantity);
   (document.getElementById(`${product.id}`).style.display = 'none');
  
  if ( item.quantity >= product.quantity) {
     alert("product are not available in store");
 
  }

    updateCart();
    getTotal(cart);
  }
}


function decrItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id && cart[i].quantity > 1) {
      cart[i].quantity -= 1;
    }
  }
  updateCart();
  getTotal(cart);
 
}

function deleteItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity = 1;
      cart.splice(i, 1);
    }
  }
  updateCart();
  getTotal(cart);
}

function myFunction() {
  alert('Thank you for shopping...')
  
}



