<template lang="pug">
#home-page(class="flex flex-col select-none")
    .part-01(class="h-fit w-full flex flex-col md:flex-row")
        .left(class="w-full md:w-[60%] h-[400px] md:h-[440px] mb-[2rem] md:mb-0 md:mr-[2rem] border-[2px]")
        .right(class="md:w-[40%]")
            .right-mini-01(class="w-full h-[204px] mb-[2rem] border-[2px]")
            .right-mini-02(class="w-full h-[204px] border-[2px]")

    .part-02(class="flex justify-between items-center flex-col md:flex-row my-[5rem] text-[1.25rem] font-[500]")
        .box-01(class="w-full py-[30px] px-[30px] flex justify-start items-center bg-white md:mr-[3rem]")
            img(src="@/assets/icons/check-yellow.png" class="w-[59px] h-[48px]")
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
        //- .categories-container(class="w-full mt-[1rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
        .categories-container(class="w-full mt-[1rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
            div(v-for="item in 4") <categoryForm /> 
            
    .part-04(class="flex flex-col mb-[5rem]")
        span.title() FEATURED PRODUCTS
        .categories-container(class="mt-[1rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
            div(v-for="item in 4") <productForm /> 
            
    .part-05(class="flex mb-[5rem]")

    .part-06(class="flex flex-col mb-[5rem]")
        span.title() RECENT PRODUCTS
        .categories-container(class="mt-[1rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
            div(v-for="item in 4") <productForm /> 

    .part-07(class="flex")
</template>



<script>
</script>



<style>
#home-page{
    color: #6C757D;
    .title{
        font-size: 2rem;
        font-weight: 700;
        color: #3D464D;
    }
}
</style>