<template lang="pug">
div(class="w-full py-[10px] px-[15px] flex items-center mb-[2rem] bg-white select-none")
    NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/home") Home
    span(class="mr-[10px]") /
    NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/shop") Shop
    span(class="mr-[10px]") /
    NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]") Checkout
#checkout(class="flex justify-between")
    .address-container(class="w-[68%]")
        .address-title(class="flex justify-start items-center mb-[1rem]")
            span(class="text-[1.25rem] font-[500] text-[#3D464D] mr-[1rem]") BILLING ADDRESS
            div(class="border-t-[1px] w-[calc(100%-12rem)] border-dashed border-[#a3a5a8]")
        .address-detail(class="w-full flex justify-between items-start p-[30px] bg-white")
            .left(class="w-[48%]")
                input(class="w-full py-[5px] px-[20px] border-[1px] rounded-[10px] mb-[1rem] outline-[#FFD333]" placeholder="First Name")
                input(class="w-full py-[5px] px-[20px] border-[1px] rounded-[10px] mb-[1rem] outline-[#FFD333]" placeholder="Email")
                input(class="w-full py-[5px] px-[20px] border-[1px] rounded-[10px] mb-[1rem] outline-[#FFD333]" placeholder="Phone Number")
            .right(class="w-[48%]")
                input(class="w-full py-[5px] px-[20px] border-[1px] rounded-[10px] mb-[1rem] outline-[#FFD333]" placeholder="Last Name")
                input(class="w-full py-[5px] px-[20px] border-[1px] rounded-[10px] mb-[1rem] outline-[#FFD333]" placeholder="Address")
                input(class="w-full py-[5px] px-[20px] border-[1px] rounded-[10px] mb-[1rem] outline-[#FFD333]" placeholder="Note for shop (if you have)")

    .checking-container(class="w-[30%]")
        .order-total(class="mb-[1rem]")
            .order-total-title(class="flex justify-start items-center mb-[1rem]")
                span(class="text-[1.25rem] font-[500] text-[#3D464D] mr-[1rem]") ORDER TOTAL
                div(class="border-t-[1px] w-[calc(100%-9rem)] border-dashed border-[#a3a5a8]")
            .order-total-detail(class="p-[20px] font-[500] bg-white")
                div(class="w-full flex justify-center items-center text-[1.25rem] left-[50%]") Product
                div(v-for="product in productList" class="flex justify-between items-center text-[1rem] text-[#6C757D] mb-[0.5rem]")
                    .product-name
                        span {{ product.name }} (x{{ product.quantity }})
                    .product-price 
                        span ${{ product.price * product.quantity }}
                div(class="border-t-[1px] w-full my-[1rem] border-[#a3a5a8]")
                div(class="flex justify-between items-center text-[1rem] mb-[0.5rem]")
                    .product-name
                        span Subtotal
                    .product-price 
                        span ${{ subtotalPrice }}
                div(class="flex justify-between items-center text-[1rem] mb-[0.5rem]")
                    .product-name
                        span Shipping
                    .product-price 
                        span ${{ shipping }}

</template>


<script setup>
var productList = ref(JSON.parse(localStorage.getItem('shoppingCart')))
if(!productList.value){
    window.location.href = "/shop";
}

const subtotalPrice = computed(()=>{
    var subtotal = 0
    for(var i=0; i<productList.value.length; i++){
        subtotal = subtotal + (productList.value[i].price * productList.value[i].quantity)
    }
    return parseInt(subtotal)
})

const shipping = (subtotalPrice/100)*2
// const shipping = (parseInt(subtotalPrice))
// const shipping = subtotalPrice


</script>