export function checkQuantity(params) {
    var check = parseInt(params)
    if(params < 1 || params == '' || isNaN(check)){
        return 1
    }
    else{
        return params
    }
}


export function addToCart(id, name, price, image, description) {
    var shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
    var data = [{
        'id': id,
        'name' : name,
        'price' : price,
        'image' : image,
        'description' : description,
    }];
    if(shoppingCart){
        // shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
        shoppingCart.push(data)
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
        console.log(shoppingCart)
    }
    else {
        localStorage.setItem("shoppingCart", JSON.stringify(data))
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
}