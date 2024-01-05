<template lang="pug">
#home-page
    .part-01(class="flex flex-col md:flex-row")
        //- .left(class="min-w-[300px] md:w-[60%] h-[200px] md:h-[440px] mr-[2rem] bg-slate-300")
        .left(class="w-full md:w-[60%] h-[400px] md:h-[440px] mb-[2rem] md:mb-0 md:mr-[2rem] bg-slate-300")
            img()
        .right(class="md:w-[40%] h-10")
            .right-mini-01(class="bg-green-300 w-full h-[204px] mb-[2rem]")
            .right-mini-02(class="bg-green-300 w-full h-[204px]")

    .part-02(class="flex justify-between items-center my-[5rem] text-[1.25rem] font-[500]")
        .box-01(class="w-full py-[30px] px-[30px] flex justify-start items-center bg-white mr-[3rem]")
            img(src="@/assets/icons/check-yellow.png" class="w-[59px] h-[48px]")
            span(class="font-[500] text-[1.25rem]") Quality Product
        .box-01(class="w-full py-[30px] px-[30px] flex justify-start items-center bg-white mr-[3rem]")
            img(src="@/assets/icons/check-yellow.png" class="w-[59px] h-[48px]")
            span(class="font-[500] text-[1.25rem]") Quality Product
        .box-01(class="w-full py-[30px] px-[30px] flex justify-start items-center bg-white mr-[3rem]")
            img(src="@/assets/icons/check-yellow.png" class="w-[59px] h-[48px]")
            span(class="font-[500] text-[1.25rem]") Quality Product
        .box-01(class="w-full py-[30px] px-[30px] flex justify-start items-center bg-white")
            img(src="@/assets/icons/check-yellow.png" class="w-[59px] h-[48px]")
            span(class="font-[500] text-[1.25rem]") Quality Product

    .part-03(class="flex")
    .part-04(class="flex")
    .part-05(class="flex")
    .part-06(class="flex")
    .part-07(class="flex")
</template>



<script>
</script>



<style>
</style>