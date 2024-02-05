<template lang="pug">
Notification(:content="'hhehehehe'")
div(class="w-full py-[10px] px-[15px] flex items-center mb-[2rem] bg-white select-none")
    NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/home") Home
    span(class="mr-[10px]") /
    NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/shop") Shop
    span(class="mr-[10px]") /
    NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]") Checkout
#checkout(class="flex justify-between select-none")
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
            .order-total-detail(class="px-[30px] py-[20px] font-[500] bg-white mb-[2rem]")
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
                        span ${{ shippingPrice }}
                div(class="border-t-[1px] w-full my-[1rem] border-[#a3a5a8]")
                div(class="flex justify-between items-center text-[1rem] mb-[0.5rem]")
                    .product-name
                        span Total
                    .product-price 
                        span ${{ totalPrice }}
            .order-total-title(class="flex justify-start items-center mb-[1rem]")
                span(class="text-[1.25rem] font-[500] text-[#3D464D] mr-[1rem]") ORDER TOTAL
                div(class="border-t-[1px] w-[calc(100%-9rem)] border-dashed border-[#a3a5a8]")
            .order-total-detail(class="px-[30px] py-[20px] font-[500] bg-white mb-[1rem]")
                div(v-for="(paymentType, index) in paymentTypes" class="flex justify-start items-center mb-[0.5rem]")
                    div(class="h-[20px] w-[20px] border-[1px] mr-[0.5rem] hover:cursor-pointer" @click="currentPaymentType = index")
                        img(v-if="currentPaymentType == index" src="@/assets/icons/yellow-check.png")
                    span {{ paymentType.name }}
                .place-order-btn-container(class="flex justify-center items-center")
                    .place-order-btn(class="w-fit flex justify-center items-center px-[25px] py-[10px] rounded-[30px] active:translate-y-[2px] hover:cursor-pointer hover:text-white duration-[300ms] bg-[#FFD333]")
                        span Place Order

                    
                        

</template>


<script setup>
import { paymentTypes } from '@/common/data'

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
const shippingPrice = ref((subtotalPrice.value/100)*5)
const totalPrice = ref(subtotalPrice.value + shippingPrice.value)
const currentPaymentType = ref(0)


</script>