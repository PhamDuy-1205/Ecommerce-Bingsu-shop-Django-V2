<template lang="pug">
#footer(class="w-full h-fit bg-[#3D464D] text-white px-[3rem] select-none")
    .footer-container(class="w-full py-[2rem] grid gap-[2rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
        .part-01(class="flex flex-col")
            span(class="text-[1.25rem] font-[500] mb-[1rem]") GET IN TOUCH
            //- span(class="mb-[1rem]") This is some dummy content that I don't know what to write about.
            span(class="mb-[0.7rem] flex items-center")
                img(src="@/assets/icons/yellow-gps.png" class="w-[20px] h-[20px] mr-[5px]")
                p() 123 District 1, HCM, VietNam
            span(class="mb-[0.7rem] flex items-center")
                img(src="@/assets/icons/yellow-mail.png" class="w-[20px] h-[20px] mr-[5px]")
                p() gmail@example.com
            span(class="mb-[0.7rem] flex items-center")
                img(src="@/assets/icons/yellow-phone-ringing-2.png" class="w-[20px] h-[20px] mr-[5px]")
                p() +012 345 67890


        .part-02(class="flex flex-col")
            span(class="text-[1.25rem] font-[500]") QUICK SHOP
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Home
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Our Shop
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Shop Detail
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Shopping Cart
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Checkout
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Contact Us


        .part-03(class="flex flex-col")
            span(class="text-[1.25rem] font-[500]") MY ACCOUNT
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Home
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Our Shop
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Shop Detail
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Shopping Cart
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Checkout
            span(class="mb-[0.3rem] w-fit flex justify-start items-center hover:cursor-pointer hover:opacity-[0.6]")
                img(src="@/assets/icons/white-arrow.png" class="w-[10px] h-[10px] mr-[10px]")
                NuxtLink() Contact Us


        .part-04(class="flex flex-col")
            span(class="text-[1.25rem] font-[500]") NEWSLETTER
            span(class="mb-[1rem]") Please send us your email, and we will pretend to care.
            span(class="flex justify-center items-center rounded-[5px] bg-white")
                input(placeholder="Your Email Here" class="w-full py-[3px] px-[12px] outline-none text-[#3D464D] rounded-l-[5px]")
                div(class="w-fit h-fit py-[3px] px-[12px] bg-[#FFD333] text-[#3D464D] font-[500] active:translate-y-[0.5px] rounded-r-[5px]") Send
            //- span(class="text-[1rem] font-[500]") FOLLOW US

</template>