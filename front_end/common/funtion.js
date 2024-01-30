export function checkQuantity(params) {
    var check = parseInt(params)
    if(params < 1 || params == '' || isNaN(check)){
        return 1
    }
    else{
        return params
    }
}


export function addToCart(id, name, price, image, description, quantity) {
    var data = {
        'id': id,
        'name' : name,
        'price' : price,
        'image' : image,
        'description' : description,
        'quantity' : quantity
    };
    var shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
    var cart = [];
    if(shoppingCart){
        for(var i=0; i<shoppingCart.length; i++){
            if(shoppingCart[i].id !== data.id){
                cart.push(shoppingCart[i])
            }
        }
        cart.push(data)
        localStorage.setItem("shoppingCart", JSON.stringify(cart))
    }
    else {
        cart.push(data)
        localStorage.setItem("shoppingCart", JSON.stringify(cart))
    }
}


export function setProductDetailToStorage(id, name, price, image, description){
    var data = {
        'id': id,
        'name' : name,
        'price' : price,
        'image' : image,
        'description' : description,
    };
    localStorage.setItem("product_detail", JSON.stringify(data))

    var recentProductList = JSON.parse(localStorage.getItem('recentProduct'))
    var listOfRecentProduct = []
    if(recentProductList){
        listOfRecentProduct.push(data)
        for(var i=0; i<recentProductList.length; i++){
            if(listOfRecentProduct.length < 8 && recentProductList[i].id !== data.id){
                listOfRecentProduct.push(recentProductList[i])
            }
        }
        localStorage.setItem("recentProduct", JSON.stringify(listOfRecentProduct))
    }
    else {
        console.log('test')
        listOfRecentProduct.push(data)
        localStorage.setItem("recentProduct", JSON.stringify(listOfRecentProduct))
    }
}