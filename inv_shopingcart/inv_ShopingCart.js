 const inventory = [
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
//   *** This code is used for add, remove, and update product in [inventory]**** 
const inventoryTableBody = document.getElementById('inventory-table-body');
const productForm = document.getElementById('product-form');
const addProductBtn = document.getElementById('add-product-btn');
function renderInventory() {
    inventoryTableBody.innerHTML = '';
    for (const product of inventory) {
        const row = document.createElement('tr');   
        row.innerHTML = `<td>${product.id}</td>
                         <td>${product.name}</td>
                         <td>$${product.price}</td>
                         <td>${product.quantity}</td>
                         <td>
              <button  onclick="removeProduct(${product.id})" >Remove</button>
              <button onclick="update_product(${product.id})">Update</button>
            </td> `;
        inventoryTableBody.appendChild(row);
    }
}
// add product in inventory
function addProduct(product) {
    inventory.push(product);
    renderInventory();
}
// remmove product in inventory
function removeProduct(id) {
    inventory.splice(inventory.findIndex(product => product.id === id), 1);
    renderInventory();
}
// update product in inventory issue
function update_product(id) {
    const product = inventory.find(product => product.id === id);
    if (product) {
      document.getElementById('id').value=product.id+=1;
        document.getElementById('name').value = product.name;
        document.getElementById('price').value = product.price;
        document.getElementById('quantity').value = product.quantity;
    } else {
        alert('Product not found');
    }
}
productForm.addEventListener('submit', event => {
   event.preventDefault();
    const id = parseFloat(document.getElementById('id').value);
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    addProduct({ id,name, price, quantity });
    productForm.reset();
});
renderInventory();

// *** This code is used for add, remove, and update product in [Shoping_cart]**** 
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
  (product) => `<div class="product-card">
        <h2 class="product-name">${product.name}</h2>
        <strong>$${product.price}</strong>
        <button class="product-btn" id=${product.id}>Add to Cart</button>
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
            <button onclick={deleteItem(${item.id})} class="cart-product" id=${item.id}>Delete Cart</button></div>
           </div>`
  );

  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = cartHTML.join("");
}

let num = document.querySelectorAll(".product-btn").length;
for (let i = 0; i < num; i++) {
  document
    .querySelectorAll(".product-btn")
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
    cart.unshift(product);
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

function incrItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i] && cart[i].id == id) {
      cart[i].quantity += 1;
    }
  }
  updateCart();
  getTotal(cart);
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

