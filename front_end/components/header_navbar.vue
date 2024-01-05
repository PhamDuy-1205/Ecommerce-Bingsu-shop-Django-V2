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
                    button(@click="toggleDisplay('myAccountDisplay')" class="relative flex items-center hover:cursor-pointer")
                        span(class="mr-[7px]") My Account
                        img(src="@/assets/icons/caret-down.png" class="w-[10px]")
                    div(class="absolute h-screen w-screen right-[-202px] top-[-4px]" @click="toggleDisplay('myAccountDisplay')" v-show="myAccountDisplay")
                    .popup(class="absolute w-[117px] py-[10px] flex justify-center items-start flex-col border-[#6C757D] border-[1px] top-[37px] left-[0px] bg-[#FFFFFF] hover:cursor-pointer" v-show="myAccountDisplay")
                        span(class="bg-[#FFFFFF] w-full pl-[17px] mb-[3px] hover:bg-[#F5F5F5] hover:cursor-pointer" @click="toggleDisplay('myAccountDisplay')") Sign In
                        span(class="bg-[#FFFFFF] w-full pl-[17px] hover:bg-[#F5F5F5] hover:cursor-pointer" @click="toggleDisplay('myAccountDisplay')") Sign Up
                .right-mini-02(@click="toggleDisplay('moneyDisplay')" class="relative ml-[16px] py-[0.25rem] px-[0.5rem] flex items-center bg-[#FFFFFF] hover:cursor-pointer")
                    p(class="mr-[7px]") {{ money }}
                    img(src="@/assets/icons/caret-down.png" class="w-[10px]")
                    div(class="absolute h-screen w-screen right-[-119px] top-[-19px]" v-show="moneyDisplay")
                    .popup(class="absolute w-[68px] py-[10px] flex justify-center items-start flex-col border-[#6C757D] border-[1px] top-[37px] left-[0px] bg-[#FFFFFF]" v-show="moneyDisplay")
                        span(class="bg-[#FFFFFF] w-full flex justify-center items-center mb-[3px] hover:bg-[#F5F5F5] hover:cursor-pointer" @click="selectMoney('1')") VNĐ
                        span(class="bg-[#FFFFFF] w-full flex justify-center items-center hover:bg-[#F5F5F5] hover:cursor-pointer" @click="selectMoney('2')") USD
                .right-mini-03(@click="toggleDisplay('languageDisplay')" class="relative ml-[16px] py-[0.25rem] px-[0.5rem] flex items-center bg-[#FFFFFF] hover:cursor-pointer")
                    p(class="mr-[7px] ") {{ language }}
                    img(src="@/assets/icons/caret-down.png" class="w-[10px]")
                    div(class="absolute h-screen w-screen right-[-48px] top-[-19px]" v-show="languageDisplay")
                    .popup(class="absolute w-[55px] py-[10px] flex justify-center items-center flex-col border-[#6C757D] border-[1px] top-[37px] left-[0px] bg-[#FFFFFF]" v-show="languageDisplay")
                        span(class="bg-[#FFFFFF] w-full flex justify-center items-center mb-[3px] hover:bg-[#F5F5F5] hover:cursor-pointer" @click="selectLanguage('1')") VN
                        span(class="bg-[#FFFFFF] w-full flex justify-center items-center hover:bg-[#F5F5F5] hover:cursor-pointer" @click="selectLanguage('2')") US
        .line-02-container(class="w-full px-[3rem] py-[1rem] flex justify-between items-center")
            NuxtLink.shop-name-container(class="flex hover:cursor-pointer" to="/home")
                span(class="text-[2rem] font-[700] px-[0.5rem] bg-[#3D464D] text-[#FFD333]") BINGSU
                span(class="text-[2rem] font-[700] px-[0.5rem] bg-[#FFD333] text-[#3D464D]") STORE
            .search-bar-container(class="flex border-[1px] w-[35%]")
                input(class="w-full py-[6px] px-[12px] outline-[#FFD333]")
                img(src="@/assets/icons/magnifying-glass.png" class="w-[37px] h-full p-[10px] bg-white border-l-[1px]  hover:cursor-pointer")
            .customer-Service-container(class="flex justify-center items-end flex-col")
                span(class="font-[400] text-[#6C757D]") Customer Service
                span(class="text-[1.25rem] font-[500] text-[#6C757D") +012 345 6789
        .line-03-container(class="px-[3rem] flex justify-between items-center border-[2px] bg-[#3D464D]")
            .left(class="w-1/2 h-[65px] flex")
                .left-mini-01-container(class="relative w-[48%] min-w-[250px] h-full flex justify-between items-center px-[2rem] bg-[#FFD333] hover:cursor-pointer" @click="toggleDisplay('categoryDisplay')")
                    .left-mini-01-item-01(class="w-1/2 h-full flex justify-be items-center")
                        img(src="@/assets/icons/menu.png" class="w-[20px] mr-[0.5rem]")
                        span(class="font-[700] text-[#3D464D]") Categories
                    .left-mini-01-item-02()
                        img(src="@/assets/icons/arrow-down-sign-to-navigate.png" class="w-[20px] mr-[0.5rem]")
                .left-mini-01-container-list(class="absolute w-[22.7%] flex flex-col mt-[65px]" v-show="categoryDisplay" @click="toggleDisplay('categoryDisplay')")
                    NuxtLink(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Shirts
                    NuxtLink(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Jeans
                    NuxtLink(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Swimwear
                    NuxtLink(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Sleepwear
                    NuxtLink(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Sportswear
                    NuxtLink(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Jumpsuits
                    NuxtLink(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Blazers
                    NuxtLink(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Jackets
                    NuxtLink(class="w-[100%] min-w-[250px] h-[40px] flex justify-between items-center border-[1px] px-[25px] bg-white hover:bg-[#e5e7eb] hover:cursor-pointer") Shoes
                .left-mini-02-container(class="flex justify-center items-center px-[2.5rem]")
                    NuxtLink(class="text-white mr-[1rem] hover:cursor-pointer hover:text-[#FFD333]" to="/home") Home
                    NuxtLink(class="text-white mr-[1rem] hover:cursor-pointer hover:text-[#FFD333]" to="/shop") Shop
                    NuxtLink(class="text-white mr-[1rem] hover:cursor-pointer hover:text-[#FFD333]" to="/contact") Contact
            .right(class="flex")
                img(src="@/assets/icons/heart.png" class="w-[25px] hover:cursor-pointer")
                span(class="ml-[5px] border-white border-[1px] rounded-[50%] px-[7px] text-white hover:cursor-pointer") 0
                NuxtLink(to="/shop/cart" class="flex")
                    img(src="@/assets/icons/carts.png" class="w-[25px] ml-5 hover:cursor-pointer")
                    span(class="ml-[5px] border-white border-[1px] rounded-[50%] px-[7px] text-white hover:cursor-pointer") 0
            

    .navbar-mobile-container(class="md:hidden")
        .line-01-container(class="bg-[#F5F5F5] text-[0.875rem] flex justify-center items-center px-[27px] py-[10px]")
            .myAccount(class="relative w-full min-w-[100px] mr-[5px] flex justify-center items-center p-[7px] border-[1px] bg-white" @click="toggleDisplay('myAccountDisplay')")
                span(class="mr-[3px]") My Account
                img(src="@/assets/icons/caret-down.png" class="w-[7px] h-[7px]")
                .myAccount-dropdown(class="absolute flex flex-col mt-[90px] border-[1px] bg-white p-[5px]" v-show="myAccountDisplay")
                    .item-01() Sign in
                    .item-02() Sign up
            .money(class="relative w-full mr-[5px] flex justify-center items-center p-[7px] border-[1px] bg-white" @click="toggleDisplay('moneyDisplay')")
                span(class="mr-[3px]") {{ money }}
                img(src="@/assets/icons/caret-down.png" class="w-[7px] h-[7px]")
                .myAccount-dropdown(class="absolute flex flex-col mt-[90px] border-[1px] bg-white p-[5px]" v-show="moneyDisplay")
                    .item-01() VNĐ
                    .item-02() USD
            .language(class="relative w-full mr-[5px] flex justify-center items-center p-[7px] border-[1px] bg-white" @click="toggleDisplay('languageDisplay')")
                span(class="mr-[3px]") {{ language }}
                img(src="@/assets/icons/caret-down.png" class="w-[7px] h-[7px]")
                .myAccount-dropdown(class="absolute flex flex-col mt-[90px] border-[1px] bg-white p-[5px]" v-show="languageDisplay")
                    .item-01() VN
                    .item-02() EN
            .favorite(class="min-w-[55px] mr-[5px] flex justify-center items-center text-[0.75rem] font-[700]")
                img(src="@/assets/icons/black-heart.png" class="w-[23px]")
                span(class=" rounded-[50%] border-[2px] border-[#3D464D] px-[0.5em]") 0
            NuxtLink(to="/shop/cart" class="flex")
                .cart(class="min-w-[55px] flex justify-center items-center text-[0.75rem] font-[700]")
                    img(src="@/assets/icons/black-shopping-cart.png" class="w-[23px]")
                    span(class=" rounded-[50%] border-[2px] border-[#3D464D] px-[0.5em]") 0
        .line-02-container(class="w-full px-[15px] py-[10px] bg-[#3D464D] flex justify-between items-center flex-col")
            .mini-container-01(class="w-full flex")
                NuxtLink(class="w-[80%]" to="/home")
                    span(class="text-[1.8rem] font-[700] px-[0.5rem] bg-white text-[#3D464D]") BINGSU
                    span(class="text-[1.8rem] font-[700] px-[0.5rem] bg-[#FFD333] text-[white]") STORE
                .right(class="w-[20%] flex justify-center items-center" @click="toggleMenuDisplay")
                    .right-mini(class="flex justify-center items-center border-[2px] border-double rounded-[5px]")
                        img(src="@/assets/icons/menu-yellow.png" class="w-[30px] mx-[10px] my-[2px]")

            NuxtLink(class="w-full font-[600] text-white py-[5px]" @click="toggleMenuDisplay" v-show="menuDisplay" to="/home") Home
            NuxtLink(class="w-full font-[600] text-white py-[5px]" @click="toggleMenuDisplay" v-show="menuDisplay" to="/shop") Shop
            NuxtLink(class="w-full font-[600] text-white py-[5px]" @click="toggleMenuDisplay" v-show="menuDisplay" to="/contact") Contact
            //- .mini-container-02(class="w-full flex flex-col")

</template>


<script setup>
//========================================  Desktop Start  ========================================
const myAccountDisplay = ref(false)
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
    if(param == 'myAccountDisplay'){
        myAccountDisplay.value = !myAccountDisplay.value
        moneyDisplay.value = false
        languageDisplay.value = false
        // console.log('myAccountDisplay')
    }
    if(param == 'moneyDisplay'){
        moneyDisplay.value = !moneyDisplay.value
        myAccountDisplay.value = false
        languageDisplay.value = false
        // console.log('moneyDisplay')
    }
    if(param == 'languageDisplay'){
        languageDisplay.value = !languageDisplay.value
        myAccountDisplay.value = false
        moneyDisplay.value = false
        // console.log('languageDisplay')
    }
    if(param == 'categoryDisplay'){
        categoryDisplay.value = !categoryDisplay.value
        myAccountDisplay.value = false
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

function toShoppingCart(){
    location.href('/shop/cart')
}
//========================================  Desktop End  ========================================


//========================================  Mobile Start  ========================================
var menuDisplay = ref(false)


const toggleMenuDisplay = () => {
    menuDisplay.value = !menuDisplay.value
    console.log(menuDisplay.value)
}

//========================================  Mobile End  ========================================

</script>


<style lang="scss">
//========================================  Desktop Start  ========================================
$white: #FFFFFF;


#navbar{
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    margin-bottom: 1.8rem;
    user-select: none;
}
//========================================  Desktop End  ========================================


//========================================  Mobile Start  ========================================
//========================================  Mobile End  ========================================
</style>
