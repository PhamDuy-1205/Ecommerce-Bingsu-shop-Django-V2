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
            img(:src="detailProduct.image" class="w-full")
        .right(class="w-full p-[2rem] bg-white text-[#3D464D] xl:w-[59%]")
            div(class="text-[2rem] font-[700]") {{ detailProduct.name }}
            .star(class="flex items-center mt-[0.3rem]")
                img(v-for="item in 5" src="@/assets/icons/yellow-star.png" class="w-[13px] h-[13px] mx-[3px] mt-[2px]")
                span(class="ml-[5px]") (99 Reviews)
            div(class="text-[2rem] font-[700] mt-[0.3rem]") ${{ detailProduct.price }}
            div(class="h-[15rem] text-[1.125rem] mt-[1rem] p-[20px] border-[1px] rounded-[10px] overflow-auto") {{ detailProduct.description }}
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
                    .minus(class="hover:cursor-pointer bg-[#FFD333] active:translate-y-[1px] rounded-l-[5px]" @click="itemInCart > 1 ? itemInCart-- : itemInCart")
                        img(src="@/assets/icons/black-minus.png" class="w-[20px] h-[20px] m-[10px]")
                    input(v-model="itemInCart" @blur="itemInCart=checkQuantity(itemInCart)" class="w-[40px] text-[1.25rem] font-[500] flex justify-center items-center outline-none text-center bg-[#e5e7eb]")
                    .plus(class="hover:cursor-pointer bg-[#FFD333] active:translate-y-[1px] rounded-r-[5px]" @click="itemInCart++")
                        img(src="@/assets/icons/black-plus.png" class="w-[20px] h-[20px] m-[10px]")
                .add-btn(class="h-[40px] flex justify-center items-center text-[1rem] font-[500] ml-[1rem] px-[15px] rounded-[5px] hover:cursor-pointer bg-[#FFD333] active:translate-y-[1px]" @click="addToCart(detailProduct.id, detailProduct.name, detailProduct.price, detailProduct.image, detailProduct.description, itemInCart)")
                    img(src="@/assets/icons/black-shopping-cart.png" class="w-[20px] h-[20px] mr-[10px]")
                    span(class="h-[20px]") ADD TO CART
            .share(class="flex justify-start items-center mt-[2rem]")
                span(class="text-[1.1rem] font-[700]") Share on:
                img(src="@/assets/icons/black-facebook.png" class="w-[20px] h-[20px] ml-[12px] hover:cursor-pointer active:translate-y-[1px]")
                img(src="@/assets/icons/black-twitter.png" class="w-[20px] h-[20px] ml-[12px] hover:cursor-pointer active:translate-y-[1px]")
                img(src="@/assets/icons/black-linkedin.png" class="w-[20px] h-[20px] ml-[12px] hover:cursor-pointer active:translate-y-[1px]")
                img(src="@/assets/icons/black-instagram.png" class="w-[20px] h-[20px] ml-[12px] hover:cursor-pointer active:translate-y-[1px]")

    .part-02(class="p-[20px] bg-white")
        .review-container(class="lg:flex")
            .left(class="w-full lg:w-[35%] flex flex-col ml-[1rem] pr-[1rem] mr-[5rem]")
                div(class="text-[1.5rem] font-[700] mb-[2rem]")
                        span() Leave a review
                div(class="text-[13px] mb-[2rem]")
                    span() Your email address will not be published. Required fields are marked *
                div(class="text-[1rem] font-[500] mb-[2rem] items-center xs:flex")
                    span(class="mr-[20px]") Your Rating * :
                    div(class="flex")
                        img(v-for="(item, index) in 5" :src="item<=(rate+1) ? '/_nuxt/assets/icons/yellow-star.png' : '/_nuxt/assets/icons/white-star.png'" class="w-[16px] h-[16px] mx-[3px] mt-[2px] hover:cursor-pointer active:translate-y-[1px]" @click="rate = index")
                div(class="flex flex-col mb-[1rem]")
                    span() Your Review * :
                    textarea(class="h-[7rem] w-full p-[10px] border-[1px]" v-model="reviewContent")
                div(class="flex flex-col mb-[1rem]")
                    span() Your Name * :
                    textarea(class="h-[3rem] w-full p-[10px] border-[1px]" v-model="reviewer")
                div(class="flex flex-col mb-[1rem]")
                    span() Your Email * :
                    textarea(class="h-[3rem] w-full p-[10px] border-[1px]" v-model="reviewerEmail")
                .send-review-container(@click="sendReview()")
                    .send-review-btn(class="w-fit p-[10px] rounded-[20px] bg-[#FFD333] active:translate-y-[1px] hover:cursor-pointer")
                        span(class="font-[700]") Send Review

            .right(class="w-full lg:w-[55%] mx-[1rem]")
                .title(class="text-[1.5rem] font-[700] mb-[2rem]")
                    span() {{ reviewList.length }} review for "Product Name"
                .review-item-container(class="max-h-[32rem] p-[15px] overflow-auto")
                    .review-item(v-for="review in reviewList" class="w-full flex border-[1px] border-[#3D464D] p-[10px] mb-[30px] rounded-[20px] shadow-lg max-h-[30rem] overflow-auto")
                        .avatar(class="h-fit min-w-[60px] rounded-[50%] mr-[0.5rem] border-[1px] border-[#3D464D]")
                            img(src="@/assets/icons/black-user-avatar.png" class="w-[40px] h-[40px] m-[10px]")
                        .info()
                            .name-time(class="sm:flex mb-[0.5rem]")
                                .name(class="font-[500]") {{ review.name }}
                                span(class="hidden mx-[10px] sm:block") -
                                .date(class="font-[500]") {{ review.date }}
                            .rate-star(class="flex mb-[1rem]")
                                img(v-for="item in review.star_vote" src="@/assets/icons/yellow-star.png" class="w-[13px] h-[13px] mx-[3px] mt-[2px]")
                            .review-content(class="max-w-[53rem] max-h-[10rem] ml-[-4rem] overflow-auto sm:ml-0")
                                span(class="font-[400]") {{ review.review_content }}
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
import { detailItemReview, sizeList } from '@/common/data'
import { checkQuantity, addToCart } from '@/common/funtion'

const detailProduct = JSON.parse(localStorage.getItem('product_detail'))
const reviewList = ref(detailItemReview)
const reviewContent = ref('')
const reviewer = ref('')
const reviewerEmail = ref('')
const rate = ref(0)
const current_size = ref(0)
const itemInCart = ref(1)


function sendReview(){
    const newReview = {
        'name': reviewer.value.trim(),
        'date': new Date().toLocaleDateString(),
        'star_vote': (rate.value) + 1,
        'review_content': reviewContent.value.trim(),
    };
    reviewList.value.unshift(newReview)
    reviewContent.value = ''
    reviewer.value = ''
    reviewerEmail.value = ''
    rate.value = 0
}



</script>