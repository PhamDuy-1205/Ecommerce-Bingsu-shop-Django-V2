<!-- <template lang="pug">
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
    if(params == '0'){console.log('/about')}
    if(params == '1'){console.log('/contact')}
    if(params == '2'){console.log('/help')}
    if(params == '3'){console.log('/FAQs')}
}

</script> -->

<template lang="pug">
#navbar
    .navbar-desktop-container(class="hidden md:block")
        .line-01-container(class="w-full bg-[#F5F5F5] flex justify-between items-center px-[3rem] py-[0.25rem]")
            .left(class="flex items-center")
                p(class="mr-[16px] text-[#6C757D] hover:cursor-pointer") About
                p(class="mr-[16px] text-[#6C757D] hover:cursor-pointer") Contact
                p(class="mr-[16px] text-[#6C757D] hover:cursor-pointer") Help
                p(class="mr-[16px] text-[#6C757D] hover:cursor-pointer") FAQs

            .right(class="flex items-center")
                .right-mini-01(class="relative ml-[16px] py-[0.25rem] px-[0.5rem] flex items-center bg-[#FFFFFF]")
                    button(@click="toggleDisplay('myAcountDisplay')" class="relative flex items-center hover:cursor-pointer")
                        span(class="mr-[7px]") My Account
                        img(src="../assets/icons/caret-down.png" class="w-[10px]")
                    div(class="absolute h-screen w-screen right-[-202px] top-[-4px]" @click="toggleDisplay('myAcountDisplay')" v-show="myAcountDisplay")
                    .popup(class="absolute w-[117px] py-[10px] flex justify-center items-start flex-col border-[#6C757D] border-[1px] top-[37px] left-[0px] bg-[#FFFFFF] hover:cursor-pointer" v-show="myAcountDisplay")
                        span(class="bg-[#FFFFFF] w-full pl-[17px] mb-[3px] hover:bg-[#F5F5F5] hover:cursor-pointer" @click="toggleDisplay('myAcountDisplay')") Sign In
                        span(class="bg-[#FFFFFF] w-full pl-[17px] hover:bg-[#F5F5F5] hover:cursor-pointer" @click="toggleDisplay('myAcountDisplay')") Sign Up
                .right-mini-02(@click="toggleDisplay('moneyDisplay')" class="relative ml-[16px] py-[0.25rem] px-[0.5rem] flex items-center bg-[#FFFFFF] hover:cursor-pointer")
                    p(class="mr-[7px]") {{ money }}
                    img(src="../assets/icons/caret-down.png" class="w-[10px]")
                    div(class="absolute h-screen w-screen right-[-119px] top-[-19px]" v-show="moneyDisplay")
                    .popup(class="absolute w-[68px] py-[10px] flex justify-center items-start flex-col border-[#6C757D] border-[1px] top-[37px] left-[0px] bg-[#FFFFFF]" v-show="moneyDisplay")
                        span(class="bg-[#FFFFFF] w-full flex justify-center items-center mb-[3px] hover:bg-[#F5F5F5] hover:cursor-pointer" @click="selectMoney('1')") VNĐ
                        span(class="bg-[#FFFFFF] w-full flex justify-center items-center hover:bg-[#F5F5F5] hover:cursor-pointer" @click="selectMoney('2')") USD
                .right-mini-03(@click="toggleDisplay('languageDisplay')" class="relative ml-[16px] py-[0.25rem] px-[0.5rem] flex items-center bg-[#FFFFFF] hover:cursor-pointer")
                    p(class="mr-[7px] ") {{ language }}
                    img(src="../assets/icons/caret-down.png" class="w-[10px]")
                    div(class="absolute h-screen w-screen right-[-48px] top-[-19px]" v-show="languageDisplay")
                    .popup(class="absolute w-[55px] py-[10px] flex justify-center items-center flex-col border-[#6C757D] border-[1px] top-[37px] left-[0px] bg-[#FFFFFF]" v-show="languageDisplay")
                        span(class="bg-[#FFFFFF] w-full flex justify-center items-center mb-[3px] hover:bg-[#F5F5F5] hover:cursor-pointer" @click="selectLanguage('1')") VN
                        span(class="bg-[#FFFFFF] w-full flex justify-center items-center hover:bg-[#F5F5F5] hover:cursor-pointer" @click="selectLanguage('2')") US
        .line-02-container(class="w-full px-[3rem] py-[1rem] flex justify-between items-center")
            .shop-name-container(class="flex hover:cursor-pointer")
                span(class="text-[2rem] font-[700] px-[0.5rem] bg-[#3D464D] text-[#FFD333]") BINGSU
                span(class="text-[2rem] font-[700] px-[0.5rem] bg-[#FFD333] text-[#3D464D]") STORE
            .search-bar-container(class="flex border-[1px] w-[35%]")
                input(class="w-full py-[6px] px-[12px] outline-[#FFD333]")
                img(src="../assets/icons/magnifying-glass.png" class="w-[37px] h-full p-[10px] bg-white border-l-[1px]  hover:cursor-pointer")
            .customer-Service-container(class="flex justify-center items-end flex-col")
                span(class="font-[400] text-[#6C757D]") Customer Service
                span(class="text-[1.25rem] font-[500] text-[#6C757D") +012 345 6789
        .line-03-container(class="px-[3rem] flex justify-between items-center border-[2px] bg-[#3D464D]")
            .left(class="w-1/2 h-[65px] flex")
                .left-mini-01-container(class="relative w-[48%] min-w-[250px] h-full flex justify-between items-center px-[2rem] bg-[#FFD333] hover:cursor-pointer" @click="toggleDisplay('categoryDisplay')")
                    .left-mini-01-item-01(class="w-1/2 h-full flex justify-be items-center")
                        img(src="../assets/icons/menu.png" class="w-[20px] mr-[0.5rem]")
                        span(class="font-[700] text-[#3D464D]") Categories
                    .left-mini-01-item-02()
                        img(src="../assets/icons/arrow-down-sign-to-navigate.png" class="w-[20px] mr-[0.5rem]")
                .left-mini-01-container-list(class="absolute w-[22.7%] flex flex-col mt-[65px]" v-show="categoryDisplay" @click="toggleDisplay('categoryDisplay')")
                    a(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Jeans
                    a(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Shirts
                    a(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Swimwear
                    a(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Sleepwear
                    a(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Sportswear
                    a(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Jumpsuits
                    a(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Blazers
                    a(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Jackets
                    a(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Shoes
                .left-mini-02-container(class="flex justify-center items-center px-[2.5rem]")
                    span(class="text-white mr-[1rem] hover:cursor-pointer hover:text-[#FFD333]") Home
                    span(class="text-white mr-[1rem] hover:cursor-pointer hover:text-[#FFD333]") Shop
                    span(class="text-white mr-[1rem] hover:cursor-pointer hover:text-[#FFD333]") Pages
                    span(class="text-white mr-[1rem] hover:cursor-pointer hover:text-[#FFD333]") Contact
            .right(class="flex")
                img(src="../assets/icons/heart.png" class="w-[25px] hover:cursor-pointer")
                span(class="ml-[5px] border-white border-[1px] rounded-[50%] px-[7px] text-white hover:cursor-pointer") 0
                img(src="../assets/icons/carts.png" class="w-[25px] ml-5 hover:cursor-pointer")
                span(class="ml-[5px] border-white border-[1px] rounded-[50%] px-[7px] text-white hover:cursor-pointer") 0
            

 

    .navbar-mobile-container
</template>


<script setup>
const myAcountDisplay = ref(false)
const moneyDisplay = ref(false)
const languageDisplay = ref(false)
const categoryDisplay = ref(false)
const money = ref('VNĐ')
const language = ref('VN')


function moneyLoader() {
    const loadMoney = window.localStorage.getItem('money')
    if(loadMoney == null){
        window.localStorage.setItem('money', 'VNĐ')
        moneyLoader()
    }
    else{money.value = loadMoney}
}
moneyLoader()

function languageLoader() {
    const loadLanguage = window.localStorage.getItem('language')
    if(loadLanguage == null){
        window.localStorage.setItem('language', 'VN')
        languageLoader()  
    }
    else{language.value = loadLanguage}
}
languageLoader()

function toggleDisplay(param) {
    if(param == 'myAcountDisplay'){
        myAcountDisplay.value = !myAcountDisplay.value
        moneyDisplay.value = false
        languageDisplay.value = false
        // console.log('myAcountDisplay')
    }
    if(param == 'moneyDisplay'){
        moneyDisplay.value = !moneyDisplay.value
        myAcountDisplay.value = false
        languageDisplay.value = false
        // console.log('moneyDisplay')
    }
    if(param == 'languageDisplay'){
        languageDisplay.value = !languageDisplay.value
        myAcountDisplay.value = false
        moneyDisplay.value = false
        // console.log('languageDisplay')
    }
    if(param == 'categoryDisplay'){
        categoryDisplay.value = !categoryDisplay.value
        myAcountDisplay.value = false
        moneyDisplay.value = false
        languageDisplay.value = false
    }
}

function selectMoney(params) {
    if(params == '1'){
        money.value = 'VNĐ'
        window.localStorage.setItem('money', 'VNĐ')
    }
    if(params == '2'){
        money.value = 'USD'
        window.localStorage.setItem('money', 'USD')
    }
}

function selectLanguage(params) {
    if(params == '1'){
        language.value = 'VN'
        window.localStorage.setItem('language', 'VN')
    }
    if(params == '2'){
        language.value = 'US'
        window.localStorage.setItem('language', 'US')
    }
}

</script>


<style lang="scss">
$white: #FFFFFF;


#navbar{
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    // line-height: 1.5;
    // .navbar-desktop-container{
    //     .line-01-container{
    //         .left{}
    //         .right{
    //             .right-mini-01{
    //                 background-color: $white;
    //                 .popup{
    //                     {
    //                         background-color: $white;
    //                     }
    //                 }
    //             }
    //             .right-mini-02{
    //                 background-color: $white;
    //             }
    //             .right-mini-03{
    //                 background-color: $white;
    //             }
    //         }
    //     }
    // }
}
</style>
