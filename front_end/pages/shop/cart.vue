<template lang="pug">
div(class="w-full py-[10px] px-[15px] flex items-center mb-[2rem] bg-white select-none")
    NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/home") Home
    span(class="mr-[10px]") /
    NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/shop") Shop
    span(class="mr-[10px]") /
    NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]") Shopping Cart
#shopping-cart(class="flex justify-between select-none")
    .list-product(class="w-[calc(100%-28rem)] flex flex-col")
        .list-title(class="flex justify-center items-center py-[13px] text-[1rem] mb-[1.5rem] bg-black")
            span(class="w-[30%] flex justify-center items-center text-white font-[500] ml-[2rem]") Products
            span(class="w-[20%] flex justify-center items-center text-white font-[500]") Price
            span(class="w-[20%] flex justify-center items-center text-white font-[500]") Quantity
            span(class="w-[20%] flex justify-center items-center text-white font-[500]") Total
            span(class="w-[10%] flex justify-center items-center text-white font-[500]") Remove
        .list-container(class="")
            .list(v-for="(product, index) in productList" :key="product" class="flex justify-center items-center py-[13px] mb-[1.5rem] bg-white")
                .image-and-name(class="w-[30%] flex justify-start items-center ml-[2rem]")
                    img(:src="product.image" class="w-[40px] mr-[10px]")
                    p(class="text-[#6C757D] text-[1.25rem]") {{ product.name }}
                .price(class="w-[20%] flex justify-center items-center")
                    p(class="text-[#6C757D] text-[1.25rem]") {{ product.price }}$
                .quantity(class="w-[20%] min-w-[8.75rem] flex justify-center items-center")
                    div(class="flex justify-center items-center rounded-l-[5px] px-[10px] active:translate-y-[0.5px] hover:cursor-pointer bg-[#FFD333]" @click="product.quantity > 1 ? product.quantity-- : product.quantity ; calcTotalPrice()")
                        img(src="@/assets/icons/black-minus.png" class="w-[20px] my-[10px]")
                    input(class="h-[40px] w-[50px] text-center text-[#6C757D] text-[1.25rem] px-[5px] border-[1px]" v-model="product.quantity" @blur="product.quantity=checkQuantity(product.quantity)")
                    div(class="flex justify-center items-center rounded-r-[5px] px-[10px] active:translate-y-[0.5px] hover:cursor-pointer bg-[#FFD333]" @click="product.quantity++ ; calcTotalPrice()")
                        img(src="@/assets/icons/black-plus.png" class="w-[20px] my-[10px]")
                    
                .total(class="w-[20%] flex justify-center items-center")
                    p(class="text-[#6C757D] text-[1.25rem]") {{ (product.quantity) * product.price }}$
                .remove(class="w-[10%] flex justify-center items-center" @click="removeProductFromCart(product.id), calcTotalPrice()")
                    span(class="w-[30px] h-auto flex justify-center items-center font-[800] rounded-[5px] active:translate-y-[0.5px] hover:cursor-pointer bg-red-500") X
    .check(class="w-[26rem]")
        .coupon-container(class="w-full h-[3rem] flex pl-[20px] text-[16px] font-[500] border-[1px] border-[black] rounded-[9px] mb-[1rem] bg-white")
            input(class="w-[80%] h-full outline-none rounded-l-[10px]" placeholder="Coupon Code") 
            div(class="w-[20%] h-full flex justify-center items-center flex-col border-l-[1px] border-l-[black] rounded-r-[10px] active:translate-y-[0.5px] hover:cursor-pointer bg-[#FFD333]")
                span() Apply
                span() Coupon
        .cart-summary-container()
            .title(class="flex justify-between items-center mb-[1rem]")
                .content(class="text-[1.2rem] font-[500] text-[#3D464D]") CART SUMMARY
                .line(class="w-[calc(100%-10rem)] border-t-[1px] border-l-[#3D464D]")
            .form(class="bg-white p-[20px]")
                .list()
                    .detail(v-for="product in productList" class="flex justify-between items-center text-[1rem] font-[500] mb-[1rem]")
                        span() {{ product.name }}
                        span(@change="totalPrice") ${{ (product.price)*(product.quantity) }}
                .total(class="my-[1.2rem]")
                    div(class="border-t-[1px] border-l-[#3D464D] mb-[1.2rem]")
                    .detail(class="flex justify-between items-center text-[1rem] font-[500]")
                        span() Total
                        span() ${{ totalPrice }}
                NuxtLink(class="flex justify-center items-center active:translate-y-[0.5px] hover:cursor-pointer" to="/shop/checkout")
                    .checkout-btn(class="flex justify-center items-center p-[10px] rounded-[10px] bg-[#FFD333]" @click="checkout()")
                        p(class="text-[1rem] font-[500]") Proceed To Checkout
</template>


<script setup>
import { checkQuantity, addToCart } from '@/common/funtion'
var productList = ref(JSON.parse(localStorage.getItem('shoppingCart')))
if(!productList.value){
    window.location.href = "/shop";
}

function removeProductFromCart(params) {
    var cart = []
    for(var i=0; i < productList.value.length; i++){
        if(productList.value[i].id == params){
            var removeItem = productList.value.findIndex( item => 
                item.id === productList.value[i].id &&
                item.name === productList.value[i].name &&
                item.price === productList.value[i].price &&
                item.image === productList.value[i].image &&
                item.description === productList.value[i].description &&
                item.quantity === productList.value[i].quantity
            )
            productList.value.splice(removeItem, 1)
            localStorage.removeItem('shoppingCart')
            for(var x=0; x < productList.value.length; x++){
                addToCart(productList.value[x].id,
                productList.value[x].name,
                productList.value[x].price,
                productList.value[x].image,
                productList.value[x].description,
                productList.value[x].quantity)
            }
        }
    }
}

const totalPrice = ref(0);
function calcTotalPrice() {
    var price = 0;
    for(let i=0; i < productList.value.length; i++){
        price = price + (productList.value[i].price)*(productList.value[i].quantity)
    }
    totalPrice.value = price;
}
calcTotalPrice()

function checkout(){
    for(var i=0; i < productList.value.length; i++){
        addToCart(
            productList.value[i].id,
            productList.value[i].name,
            productList.value[i].price,
            productList.value[i].image,
            productList.value[i].description,
            productList.value[i].quantity
        )
    }
}

</script>