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
            span(class="font-[500] text-[1.25rem]") Quality Product
        .box-01(class="w-full py-[30px] px-[30px] mt-[2rem] flex justify-start items-center bg-white md:mt-0 md:mr-[3rem]")
            img(src="@/assets/icons/transfer-arrow.png" class="w-[59px] h-[48px] mr-[10px]")
            span(class="font-[500] text-[1.25rem]") Quality Product
        .box-01(class="w-full py-[30px] px-[30px] mt-[2rem] flex justify-start items-center bg-white md:mt-0")
            img(src="@/assets/icons/yellow-phone-ringing.png" class="w-[59px] h-[48px] mr-[10px]")
            span(class="font-[500] text-[1.25rem]") Quality Product

    .part-03(class="flex flex-col mb-[5rem]")
        span.title() CATEGORIES
        .categories-container(class="w-full mt-[1rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
            .item-container(v-for="item in 4" class="w-full h-[110px] flex bg-white hover:bg-[#FFD333] hover:border-[2px] hover:border-black hover:cursor-pointer")
                .left(class="w-[30%] h-full")
                    img(src="@/assets/images/cat-1.jpg" class="w-full h-full")
                .right(class="w-[70%] h-full flex flex-col select-none p-[5px]")
                    span(class="w-full h-full flex justify-start items-center text-[1.025rem] text-[#3D464D] font-[500]") Category Name
                    span(class="w-full h-full flex justify-start items-start text-[0.875rem]") 100 Products

    .part-04(class="flex flex-col mb-[5rem]")
        span.title() FEATURED PRODUCTS
        .categories-container(class="mt-[1rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
            .item-container(v-for="item in 4" class="w-fit flex flex-col bg-white p-[20px] hover:border-black hover:border-[2px] hover:cursor-pointer")
                .top(class="flex justify-center items-center")
                    img(src="@/assets/images/product-1.jpg" class="w-full h-full")
                .bottom(class="flex justify-center items-center flex-col py-[10px] text-[#3D464D] font-[500]")
                    span(class="text-[1rem]") Product Name
                    span(class="text-[1.25rem]") 123.000
                    .vote-star(class="flex")
                        img(v-for="item in 5" src="@/assets/icons/yellow-star.png" class="w-[20px] mx-[3px]")



    .part-05(class="flex mb-[5rem]")
    .part-06(class="flex flex-col mb-[5rem]")
        span.title() RECENT PRODUCTS
        //- .categories-container(class="mt-[1rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
        //-     .item-container(v-for="item in 4" class="w-fit flex flex-col bg-white p-[20px] hover:border-black hover:border-[2px] hover:cursor-pointer")
        //-         .top(class="flex justify-center items-center")
        //-             img(src="@/assets/images/product-1.jpg" class="w-full h-full")
        //-         .bottom(class="flex justify-center items-center flex-col py-[10px] text-[#3D464D] font-[500]")
        //-             span(class="text-[1rem]") Product Name
        //-             span(class="text-[1.25rem]") 123.000
        //-             .vote-star(class="flex")
        //-                 img(v-for="item in 5" src="@/assets/icons/yellow-star.png" class="w-[20px] mx-[3px]")
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