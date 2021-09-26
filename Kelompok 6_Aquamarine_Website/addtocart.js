let carts = document.querySelectorAll('.cart'); 

// -------------------------------- List of Products ----------------------------------- //
let products =
    [
        {
            name: 'Salmon Fillet',
            tag: 'salmon',
            price: 285000,
            inCart: 0
        },
        
        {
            name: 'Shrimp',
            tag: 'shrimp1',
            price: 139000,
            inCart: 0
        },
        
        {
            name: 'Crab',
            tag: 'crab1',
            price: 148000,
            inCart: 0
        },
        
        {
            name: 'Giant Octopus',
            tag: 'octopus2',
            price: 100000,
            inCart: 0
        },
        
        {
            name: 'Scallop',
            tag: 'gallery1',
            price: 38000,
            inCart: 0
        },
        
        {
            name: 'Red Snapper',
            tag: 'redsnapper1',
            price: 98000,
            inCart: 0
        },
        
        {
            name: 'Squid',
            tag: 'cumi2',
            price: 35000,
            inCart: 0
        },
        
        {
            name: 'Lobster',
            tag: 'lobster1',
            price: 236000,
            inCart: 0
        }
    ]
// -------------------------------- List of Products ----------------------------------- //   

for(let i=0; i < carts.length; i++)
    {
        carts[i].addEventListener('click', () => 
        {  
            cartNumbers(products[i]);
            totalHarga(products[i]);
        })

    }

function cartNumbers(product)
    {
        console.log("The Product Clicked Is", product);

        let productNumbers = localStorage.getItem('cartNumbers');
            
        productNumbers = parseInt(productNumbers);

        if(productNumbers)
            {
                localStorage.setItem('cartNumbers', productNumbers + 1);
                document.querySelector('.linkcart span').textContent = productNumbers + 1; 
            }
        else
            {
                localStorage.setItem('cartNumbers', 1);
                document.querySelector('.linkcart span').textContent = 1;
            }

        setItems(product)
    }

function setItems(product)
    {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        console.log("My Cart Items Are", cartItems);

        if(cartItems != null)
            {
                if(cartItems[product.tag] == undefined)
                    {
                        cartItems = 
                            {
                                ...cartItems,
                                [product.tag]: product
                            }
                    }
                cartItems[product.tag].inCart += 1;
            }
        else
            {
                product.inCart = 1;

                cartItems =
                    {
                        [product.tag]: product
                    }
            }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }

function onLoadCartNumbers()
    {
        let productNumbers = localStorage.getItem('cartNumbers');

        if(productNumbers)
        {
            document.querySelector('.linkcart span').textContent = productNumbers;
        }
    }


// -------------------------------- Menghitung Total Harga Barang ----------------------------------- //    
function totalHarga(product) 
    {
        let cartCost = localStorage.getItem('totalHarga'); 

        console.log("Total Price Is IDR", cartCost);
        console.log(typeof cartCost);

        if (cartCost != null)
            {
                cartCost = parseInt(cartCost); 
                localStorage.setItem("totalHarga", cartCost + product.price);
            }
        else
            {
                localStorage.setItem("totalHarga", product.price);
            }      
    }

// -------------------------------- Linked to Cart ----------------------------------- //
function displayCart()
    {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);

        let productContainer = document.querySelector(".produknya");
        let cartCost = localStorage.getItem('totalHarga');

        console.log(cartItems);

        if(cartItems && productContainer)
            {
                productContainer.innerHTML = '';
                Object.values(cartItems).map(item =>
                    {
                        productContainer.innerHTML += 
                        `
                            <div class="product">
                                <ion-icon name="close"></ion-icon>
                                    <img src="images/${item.tag}.jpg">
                                    <span><b>${item.name}</b></span>
                            </div>

                            <div class="price">IDR ${item.price},-</div>
                            
                            <div class="quantity">
                                <ion-icon class="kurang" name="arrow-dropleft-circle"></ion-icon>
                                <span>${item.inCart}</span>
                                <ion-icon class="tambah" name="arrow-dropright-circle"></ion-icon>
                            </div>

                            <div class="total">
                                IDR ${item.inCart * item.price},-
                            </div>
                        `;
                    });

                    productContainer.innerHTML += 
                    `
                        <div class="cartTotalContainer">
                            <h4 class="cartTotalTitle"><b>Total Cart</b></h4>
                            <h4 class="totalCart">
                                <b>IDR ${cartCost},-</b>
                            </h4>
                        </div>
                    `;
            }
    }



onLoadCartNumbers(); 
displayCart();

