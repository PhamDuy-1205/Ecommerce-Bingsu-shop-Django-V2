<template lang="pug">
#product-detail
    div(class="w-full py-[10px] px-[15px] flex items-center mb-[2rem] bg-white")
        NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/home") Home
        span(class="mr-[10px]") /
        NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/shop") Shop
        span(class="mr-[10px]") /
        NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]") Product Detail

    .part-01(class="flex justify-between")
        .left(class="w-[39%] p-[2rem] bg-white")
            img(src="@/assets/images/product-1.jpg" class="w-full")
        .right(class="w-[59%] p-[2rem] bg-white text-[#3D464D]")
            div(class="text-[2rem] font-[700]") Product Name
            .star(class="flex items-center mt-[0.3rem]")
                img(v-for="item in 5" src="@/assets/icons/yellow-star.png" class="w-[13px] h-fit mx-[3px] mt-[2px]")
                span(class="ml-[5px]") (99 Reviews)
            div(class="text-[2rem] font-[700] mt-[0.3rem]") $150.00
            div(class="text-[1.125rem] mt-[1rem]") Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy
            .size(class="flex items-center mt-[1rem]")
                span(class="text-[1.3rem] font-[700] mr-[0.75rem]") Sizes:
                div(v-for="(item, index) in sizeList" class="flex items-center mx-[0.75rem]")
                    div(class="w-[20px] h-[20px] rounded-[50%] border-[gray] border-[1px] mr-[0.5rem] hover:cursor-pointer"  @click="current_size = index")
                        img(src="@/assets/icons/yellow-check.png" class="hidden" :class="{'selected-size' : current_size == index}")
                    span(class="font-[500]") {{item}}


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
import { sizeList } from '@/assets/main'

const current_size = ref(0)
</script>