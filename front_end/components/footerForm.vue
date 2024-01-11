<template lang="pug">
#footer(class="w-full h-fit bg-[#3D464D] text-white px-[3rem] select-none")
    .footer-container(class="w-full py-[2rem] grid gap-[2rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
        .part-01(class="flex flex-col")
            span(class="text-[1.25rem] font-[500] mb-[1rem] select-none") GET IN TOUCH
            span(class="mb-[1rem] select-none") No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no
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
            span(class="text-[1.25rem] font-[500] select-none") QUICK SHOP
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
            span(class="text-[1.25rem] font-[500] select-none") MY ACCOUNT
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
            span(class="text-[1.25rem] font-[500] select-none") NEWSLETTER
            span(class="mb-[1rem] select-none") Duo stet tempor ipsum sit amet magna ipsum tempor est
            span(class="flex justify-center items-center")
                input(placeholder="Your Email Here" class="w-full py-[3px] px-[12px] outline-none text-[#3D464D]")
                Button(class="w-fit h-fit py-[3px] px-[12px] bg-[#FFD333] text-[#3D464D] font-[500]") Send
            //- span(class="text-[1rem] font-[500] select-none") FOLLOW US

</template>