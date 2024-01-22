<template lang="pug">
div(class="w-full py-[10px] px-[15px] flex items-center mb-[2rem] bg-white")
    NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/home") Home
    span(class="mr-[10px]") /
    NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/contact") Contact

#contact()
    .title-container(class="flex items-center")
        .title(class="font-[700] text-[2rem] text-[#3D464D] w-[13rem]") CONTACT US
        .title-border(class="w-[calc(100%-13rem)] border-t-[1px] border-[#3D464D] border-dashed")
    .contact-form(class="flex justify-between items-start bg-white p-[2rem]")
        .info(class="w-[24rem] flex flex-col mr-[2rem]")
            input(placeholder="Your Email" class="border-[1px] border-[#3D464D] rounded-[15px] py-[10px] px-[20px] outline-[#FFD333]")
            input(placeholder="Your Name" class="border-[1px] border-[#3D464D] rounded-[15px] py-[10px] px-[20px] outline-[#FFD333] mt-[1.5rem]")
            input(placeholder="Your Subject" class="border-[1px] border-[#3D464D] rounded-[15px] py-[10px] px-[20px] outline-[#FFD333] mt-[1.5rem]")
        .message(class="w-[calc(100%-26rem)] flex")
            textarea(placeholder="Your Message" class="w-full h-[12rem] border-[1px] border-[#3D464D] rounded-[15px] py-[20px] px-[20px] outline-[#FFD333]") This contact page is not complete

</template>