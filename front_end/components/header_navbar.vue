<template lang="pug">
#navbar-container(class="w-screen flex justify-between items-center flex-col")
    .container-01(class="w-screen h-12 flex justify-between items-center px-[4rem]")
        .page-info(class="flex justify-start items-center")
            p(v-for="(info, index) in list_page_info" :key="index" @click="current_page_info = index, check(index)" :class="{'active_page_info': index == current_page_info}" class="pr-5 hover:underline cursor-pointer") {{ info }}
        .user-info(class="flex justify-end items-center")
            p(class="h-8 mr-5 px-2 flex justify-center items-center bg-white hover:bg-slate-200 cursor-pointer") My account
            p(class="h-8 px-3 flex justify-center items-center bg-white hover:bg-slate-200 cursor-pointer") VN
    .container-02(class="w-screen flex justify-between items-center px-[4rem]")
        .page-name-container(class="flex justify-center items-center h-full hover:cursor-default")
            span(class="bg-[#3D464D] text-[#FFD333] text-[32px] font-[700] px-[11px]") BINGSU
            span(class="bg-[#FFD333] text-[#3D464D] text-[32px] font-[700] px-[11px]") SHOP
        .search-bar-container(class="flex w-[25%] h-[32px] justify-between items-center p-[2px] border-[black] border-[1px] bg-white")
            input(class="w-[90%] h-full outline-none px-[10px]" placeholder="Search for products")
            img(src="../assets/icons/magnifying-glass.png" class="h-full w-[35px] p-[7px] bg-slate-100")
        .customer-service(class="flex flex-col justify-center items-center")
            span(class="text-[#acabab] text-[15px]") Customer Service
            span(class="font-[700] text-[18px]") +012 345 6789
    .container-03(class="w-screen flex justify-between items-center px-[4rem]")
        .left(class="h-full flex justify-center items-center")
            .categories-container(class="w-[20rem] h-full flex justify-between items-center px-[30px] bg-[#FFD333]")
                .categories-container-left(class="flex justify-center items-center text-[1rem] font-[500]")
                    img(src="../assets/icons/menu.png" class="w-[19px] mr-[0.5rem]")
                    span(class="hover:cursor-default") Categories
                .categories-container-right(class="flex justify-center items-center text-[1rem] font-[500]")
                    img(src="../assets/icons/arrow-down-sign-to-navigate.png" class="w-[19px]")
            .page-list-container(class="flex justify-center items-center h-full text-white")
                span(class="pl-[2rem] hover:text-[#FFD333] cursor-pointer") Home
                span(class="pl-[1rem] hover:text-[#FFD333] cursor-pointer") Shop
                span(class="pl-[1rem] hover:text-[#FFD333] cursor-pointer") Shop Detail
                span(class="pl-[1rem]  hover:text-[#FFD333] cursor-pointer") Contact

        .right(class="h-full text-[10px] flex items-center")
            img(src="../assets/icons/heart.png" class="w-[15px] hover:cursor-pointer")
            span(class="ml-[5px] border-white border-[1px] rounded-[50%] px-[5px] text-white hover:cursor-pointer") 0
            img(src="../assets/icons/carts.png" class="w-[15px] ml-5 hover:cursor-pointer")
            span(class="ml-[5px] border-white border-[1px] rounded-[50%] px-[5px] text-white hover:cursor-pointer") 0
            
</template>


<style lang="scss">
#navbar-container{
    font-family: "Roboto", sans-serif;
    
    .container-01{
        background-color: #F5F5F5;
        .page-info{
            .active_page_info{
                // color: yellow;
                font-weight: 500;
            }
        }
    }
    .container-02{
        height: 70px;
    }
    .container-03{
        background-color: #3D464D;
        height: 65px;
    }
}
</style>


<script setup>
var list_page_info = ['About', 'Contact', 'Help', 'FAQs']

var current_page_info = ref('')

function check(params) {
    console.log(params)
    // if(params == '0'){window.location.href = '/about'}
    // if(params == '1'){window.location.href = '/contact'}
    // if(params == '2'){window.location.href = '/help'}
    // if(params == '3'){window.location.href = '/FAQs'}
    if(params == '0'){console.log('/about')}
    if(params == '1'){console.log('/contact')}
    if(params == '2'){console.log('/help')}
    if(params == '3'){console.log('/FAQs')}
}

</script>