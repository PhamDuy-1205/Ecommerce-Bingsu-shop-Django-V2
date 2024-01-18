<template lang="pug">
NuxtLink(class="w-full h-[110px] flex bg-white hover:border-[1px] hover:border-[#3D464D] hover:cursor-pointer" to="/shop")
    .left(class="w-[30%] h-full")
        img(src="@/assets/images/cat-1.jpg" class="w-full h-full")
    .right(class="w-[70%] h-full flex flex-col select-none p-[5px]")
        span(class="w-full h-full flex justify-start items-center text-[1.025rem] text-[#3D464D] font-[500]") Category Name
        span(class="w-full h-full flex justify-start items-start text-[0.875rem]") 100 Products
//- .categories-container(class="w-full mt-[1rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
</template>