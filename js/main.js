import loader from "./components/loader.js" 
import showMenu from "./components/showMenu.js"
import showCart from "./components/showCart.js"
import products from "./components/products.js"
import getProducts from "./components/helpers/getProducts.js"
import cart from "./components/cart.js"

/*UI ELEMENTS*/
/*OCULTAR LOADER*/
loader()

/* MOSTRAR MENU */
showMenu()

/*MOSTRAR CARRITO*/
showCart()

/*END UI ELEMENTS */

/* PRODUCTS*/

const{db, printProducts} = products(await getProducts())

/*Cart*/

cart(db, printProducts)


