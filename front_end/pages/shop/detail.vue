<template lang="pug">
#product-detail(class="select-none")
    div(class="w-full py-[10px] px-[15px] flex items-center mb-[2rem] bg-white")
        NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/home") Home
        span(class="mr-[10px]") /
        NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/shop") Shop
        span(class="mr-[10px]") /
        NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]") Product Detail

    .part-01(class="flex justify-between flex-col mb-[2rem] xl:flex-row")
        .left(class="w-full p-[2rem] bg-white xl:w-[39%]")
            img(src="@/assets/images/product-1.jpg" class="w-full")
        .right(class="w-full p-[2rem] bg-white text-[#3D464D] xl:w-[59%]")
            div(class="text-[2rem] font-[700]") Product Name
            .star(class="flex items-center mt-[0.3rem]")
                img(v-for="item in 5" src="@/assets/icons/yellow-star.png" class="w-[13px] h-[13px] mx-[3px] mt-[2px]")
                span(class="ml-[5px]") (99 Reviews)
            div(class="text-[2rem] font-[700] mt-[0.3rem]") $150.00
            div(class="h-[15rem] text-[1.125rem] mt-[1rem] p-[20px] border-[1px] overflow-auto") Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy
            .size(class="flex items-center mt-[1rem]")
                span(class="text-[1.3rem] font-[700] mr-[0.75rem]") Sizes:
                div(class="grid gap-1 grid-cols-2 xs:grid-cols-3 sm:grid-cols-5")
                    div(v-for="(item, index) in sizeList" class="flex items-center mx-[0.5rem] sm:mx-[0.75rem]")
                        //- div(class="w-[20px] h-[20px] rounded-[50%] border-[gray] border-[1px] mr-[0.2rem] sm:mr-[0.5rem] hover:cursor-pointer"  @click="current_size = index")
                        div(class="w-[20px] h-[20px] rounded-[50%] border-[gray] border-[1px] mr-[0.2rem] sm:mr-[0.5rem] hover:cursor-pointer"  @click="current_size = index")
                            img(src="@/assets/icons/yellow-check.png" class="hidden" :class="{'selected-size' : current_size == index}")
                        span(class="font-[500]") {{item}}
            .add-to.cart(class="flex justify-center items-center flex-col mt-[1.5rem] xs:flex-row xs:justify-start")
                .amount-btn(class="flex mb-[1rem] xs:mb-[0rem] bg-[#e5e7eb] rounded-[5px]")
                    .minus(class="hover:cursor-pointer bg-[#FFD333] active:translate-y-[1px] rounded-l-[5px]" @click="decreaseItemInCart")
                        img(src="@/assets/icons/black-minus.png" class="w-[20px] h-[20px] m-[10px]")
                    input(v-model="itemInCart" class="w-[40px] text-[1.25rem] font-[500] flex justify-center items-center outline-none text-center bg-[#e5e7eb]")
                    .plus(class="hover:cursor-pointer bg-[#FFD333] active:translate-y-[1px] rounded-r-[5px]" @click="increaseItemInCart")
                        img(src="@/assets/icons/black-plus.png" class="w-[20px] h-[20px] m-[10px]")
                .add-btn(class="h-[40px] flex justify-center items-center text-[1rem] font-[500] ml-[1rem] px-[15px] rounded-[5px] hover:cursor-pointer bg-[#FFD333] active:translate-y-[1px]")
                    img(src="@/assets/icons/black-shopping-cart.png" class="w-[20px] h-[20px] mr-[10px]")
                    span(class="h-[20px]") ADD TO CART
            .share(class="flex justify-start items-center mt-[2rem]")
                span(class="text-[1.1rem] font-[700]") Share on:
                img(src="@/assets/icons/black-facebook.png" class="w-[20px] h-[20px] ml-[12px] hover:cursor-pointer active:translate-y-[1px]")
                img(src="@/assets/icons/black-twitter.png" class="w-[20px] h-[20px] ml-[12px] hover:cursor-pointer active:translate-y-[1px]")
                img(src="@/assets/icons/black-linkedin.png" class="w-[20px] h-[20px] ml-[12px] hover:cursor-pointer active:translate-y-[1px]")
                img(src="@/assets/icons/black-instagram.png" class="w-[20px] h-[20px] ml-[12px] hover:cursor-pointer active:translate-y-[1px]")

    .part-02(class="p-[20px] bg-white")
        .review-container(class="flex")
            .left(class="w-[35%] flex flex-col ml-[1rem] mr-[5rem]")
                div(class="text-[1.5rem] font-[700] mb-[2rem]")
                        span() Leave a review
                div(class="text-[13px] mb-[2rem]")
                    span() Your email address will not be published. Required fields are marked *
                div(class="text-[1rem] font-[500] mb-[2rem] flex items-center")
                    span(class="mr-[20px]") Your Rating * :
                    img(v-for="item in 5" src="@/assets/icons/yellow-star.png" class="w-[16px] h-[16px] mx-[3px] mt-[2px] hover:cursor-pointer active:translate-y-[1px]")
                div(class="flex flex-col mb-[1rem]")
                    span() Your Review * :
                    textarea(class="h-[7rem] w-full p-[10px] border-[1px]")
                div(class="flex flex-col mb-[1rem]")
                    span() Your Name * :
                    textarea(class="h-[3rem] w-full p-[10px] border-[1px]")
                div(class="flex flex-col mb-[1rem]")
                    span() Your Email * :
                    textarea(class="h-[3rem] w-full p-[10px] border-[1px]")
                .send-review-container()
                    .send-review-btn(class="w-fit p-[10px] rounded-[20px] bg-[#FFD333] active:translate-y-[1px] hover:cursor-pointer")
                        span(class="font-[700]") Send Review

            .right(class="w-[55%] mx-[1rem]")
                .title(class="text-[1.5rem] font-[700] mb-[2rem]")
                    span() 1 review for "Product Name"
                .review-item-container(class="max-h-[32rem] p-[15px] overflow-auto")
                    .review-item(v-for="item in detailItemReview" class="w-full flex border-[1px] border-[#3D464D] p-[10px] mb-[30px] rounded-[20px] shadow-lg max-h-[30rem] overflow-auto")
                        .avatar(class="h-fit min-w-[40px] rounded-[50%] mr-[0.5rem] border-[1px] border-[#3D464D]")
                            img(src="@/assets/icons/black-user-avatar.png" class="w-[40px] h-[40px] m-[10px]")
                        .info()
                            .part-01(class="flex mb-[0.5rem]")
                                .name(class="font-[500]") {{ item.name }}
                                span(class="mx-[10px]") -
                                .date(class="font-[500]") {{ item.date }}
                            .part-02(class="flex mb-[0.5rem]")
                                img(v-for="item in item.star_vote" src="@/assets/icons/yellow-star.png" class="w-[13px] h-[13px] mx-[3px] mt-[2px]")
                            .part-03(class="max-w-[53rem] max-h-[10rem] overflow-auto")
                                span(class="font-[400]") {{ item.review_content }}
                
        

</template>


<style lang="scss">
#product-detail{
    .part-01{
        .right{
            .selected-size{
                display: block;
            }
        }
    }
}
</style>


<script setup>
import { sizeList, detailItemReview } from '@/assets/main'

const current_size = ref(0)

const itemInCart = ref(0)
const decreaseItemInCart = () => {
    if(itemInCart.value > 0) {
        itemInCart.value--
    }
}
const increaseItemInCart = () => { itemInCart.value++ }
</script>