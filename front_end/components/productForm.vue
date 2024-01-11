<template lang="pug">
.item-container(class="w-fit flex flex-col bg-white p-[20px] hover:border-black hover:border-[2px] hover:cursor-pointer")
    .top(class="flex justify-center items-center")
        img(src="@/assets/images/product-1.jpg" class="w-full h-full")
    .bottom(class="flex justify-center items-center flex-col py-[10px] text-[#3D464D] font-[500]")
        span(class="text-[1rem]") Product Name
        span(class="text-[1.25rem]") 123.000
        .vote-star(class="flex")
            img(v-for="item in 5" src="@/assets/icons/yellow-star.png" class="w-[20px] mx-[3px]")
</template>