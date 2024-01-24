<template lang="pug">
NuxtLink(class="w-fit flex flex-col bg-white p-[20px] hover:border-[1px] hover:border-[#3D464D] hover:cursor-pointer" to="/shop/detail")
    .top(class="flex justify-center items-center")
        img(:src="image" class="w-full h-full")
    .bottom(class="flex justify-center items-center flex-col py-[10px] text-[#3D464D] font-[500]")
        span(class="text-[1rem]") {{ name }}
        span(class="text-[1.25rem]") ${{ price }}
        .vote-star(class="flex")
            img(v-for="item in 5" src="@/assets/icons/yellow-star.png" class="w-[20px] mx-[3px]")
</template>


<script setup>
const { id, name, price, image } = defineProps(['id', 'name', 'price', 'image']);
</script>