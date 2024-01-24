<template lang="pug">
#home-page(class="flex flex-col select-none")
    .part-01(class="h-fit w-full flex flex-col md:flex-row")
        .left(class="w-full md:w-[67%] h-[400px] md:h-[440px] mb-[2rem] md:mb-0 md:mr-[2rem] border-[2px]")
            div(class="relative w-full h-full")
                img(:src="categories[categorySelection].image" class="w-full h-full")
                div(class="absolute w-full h-full mt-[-396px] md:mt-[-436px] bg-white opacity-[0.15]")
                div(class="absolute h-full mt-[-396px] w-full md:mt-[-436px] flex justify-center items-center flex-col px-[5%] xl:px-[28%]")
                    span.category-content(class="text-[3.5rem] text-center text-white mb-[1rem] stroke-[black] stroke-1") {{ categories[categorySelection].name }}
                    span.category-content(class="text-center text-white mb-[1rem] h-[9rem]") {{ categories[categorySelection].describe }}
                    NuxtLink(class="border-[white] text-white border-[1px] py-[7px] px-[20px] mb-[2rem] hover:bg-white duration-[700ms] hover:text-black hover:cursor-pointer" to="/shop") Shop Now
                    div(class="flex")
                        div(v-for="(category, index) in categories" class="w-[20px] h-[20px] border-white border-[1px] mx-[5px] duration-[700ms] hover:cursor-pointer" @click="categorySelection = index" :class="{'selected' : categorySelection == index }")
            

        .right(class="md:w-[33%]")
            .right-mini-01(class="relative w-full h-[204px] mb-[2rem] border-[2px]")
                img(src="@/assets/images/offer-1.jpg" class="w-full h-full ")
                div(class="absolute w-full h-full mt-[-200px] bg-white opacity-[0.15]")
                div(class="absolute w-full h-full mt-[-200px] md:mt-[-200px] flex justify-center items-center flex-col")
                    span(class="text-[0.75] font-[500] text-center text-white") SAVE 20%
                    span(class="text-[2.5rem] md:text-[2rem] lg:text-[2.5rem] font-[500] text-center text-white mb-[0.5rem]") Special Offer
                    NuxtLink(class="font-[500] text-black bg-[#FFD333] py-[7px] px-[20px] mb-[1rem] hover:cursor-pointer" to="/shop") Shop Now

            .right-mini-02(class="relative w-full h-[204px] mb-[2rem] border-[2px]")
                img(src="@/assets/images/offer-2.jpg" class="w-full h-full ")
                div(class="absolute w-full h-full mt-[-200px] bg-white opacity-[0.15]")
                div(class="absolute w-full h-full mt-[-200px] md:mt-[-200px] flex justify-center items-center flex-col")
                    span(class="text-[0.75] font-[500] text-center text-white") SAVE 20%
                    span(class="text-[2.5rem] md:text-[2rem] lg:text-[2.5rem]  font-[500] text-center text-white mb-[0.5rem]") Special Offer
                    NuxtLink(class="font-[500] text-black bg-[#FFD333] py-[7px] px-[20px] mb-[1rem] hover:cursor-pointer" to="/shop") Shop Now

    .part-02(class="flex justify-between items-center flex-col md:flex-row my-[5rem] text-[1.25rem] font-[500]")
        .box-01(class="w-full py-[30px] px-[30px] flex justify-start items-center bg-white md:mr-[3rem]")
            img(src="@/assets/icons/yellow-check.png" class="w-[59px] h-[48px]")
            span(class="font-[500] text-[1.25rem]") Quality Product
        .box-01(class="w-full py-[30px] px-[30px] mt-[2rem] flex justify-start items-center bg-white md:mt-0 md:mr-[3rem]")
            img(src="@/assets/icons/yellow-truck.png" class="w-[59px] h-[48px] mr-[10px]")
            span(class="font-[500] text-[1.25rem]") Free Shipping
        .box-01(class="w-full py-[30px] px-[30px] mt-[2rem] flex justify-start items-center bg-white md:mt-0 md:mr-[3rem]")
            img(src="@/assets/icons/transfer-arrow.png" class="w-[59px] h-[48px] mr-[10px]")
            span(class="font-[500] text-[1.25rem]") 14-Day Return
        .box-01(class="w-full py-[30px] px-[30px] mt-[2rem] flex justify-start items-center bg-white md:mt-0")
            img(src="@/assets/icons/yellow-phone-ringing.png" class="w-[59px] h-[48px] mr-[10px]")
            span(class="font-[500] text-[1.25rem]") 24/7 Support

    .part-03(class="flex flex-col mb-[5rem]")
        span.title() CATEGORIES
        .categories-container(class="w-full mt-[1rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
            //- div(v-for="item in 12") <categoryForm /> 
            categoryForm(v-for="category in categories" :id="category.id", :name="category.name", :image="category.image")

    .part-04(class="flex flex-col mb-[5rem]")
        span.title() FEATURED PRODUCTS
        .categories-container(class="mt-[1rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
            div(v-for="item in 8") <productForm /> 

    .part-05(class="flex mb-[5rem]")

    .part-06(class="flex flex-col mb-[5rem]")
        span.title() RECENT PRODUCTS
        .categories-container(class="mt-[1rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
            div(v-for="item in 8") <productForm /> 

    .part-07(class="flex")
</template>



<script setup>
import { categories } from '@/common/data'
import categoryForm from '@/components/categoryForm.vue'

const categorySelection = ref(0)

const name = ref(categories[categorySelection.value].name)

function nextCategory() {
    categorySelection.value = categorySelection.value + 1
    if(categorySelection.value == categories.length){
        categorySelection.value = 0
    }
}
// Gọi hàm nextCategory() mỗi 10 giây
setInterval(nextCategory, 10000);


</script>



<style>
#home-page{
    color: #6C757D;
    .title{
        font-size: 2rem;
        font-weight: 700;
        color: #3D464D;
    }
    .test{
        display: block;
    }
    .left{
        .selected{
            width: 30px;
            background-color: white;
        }
        .category-content{
            animation: showcontent 1s ease-in-out 1 forwards;
            text-shadow: 0 0 5px black, 0 0 10px black, 0 0 15px black, 0 0 20px black;
        }
    }
}

@keyframes showcontent {
    from{
        opacity: 0;
        transform: translate(0, 100px);
        filter: blur(33px);
    }
    to{
        opacity: 1;
        transform: translate(0, 0);
        filter: blur(0);
    }
}
</style>