function products (products){
    const db = [...products]

    function printProducts (){
        const productsDOM = document.querySelector(".products--container")
        let htmlProducts = ""

        for( let product of db){
            htmlProducts += `<article class="product">
            <div class="product--image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product--content">
                <button type="button" class="product--btn add--to--cart" data-id="${product.id}">
                    <i class='bx bx-cart-add'></i>
                </button>
                <span class="product--price">$${product.price}</span>
                <span class="product--stock">Disponible: ${product.quantity}</span>
                <h3 class="product--title">${product.name}</h3>
            </div>
        </article>`
        }

        productsDOM.innerHTML= htmlProducts
    }

    printProducts()

    return{
        db,
        printProducts
    }
}

export default products