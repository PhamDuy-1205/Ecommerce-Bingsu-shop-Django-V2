<template lang="pug">
#shop-page(class="select-none text-[#6C757D]")
    div(class="w-full py-[10px] px-[15px] flex items-center mb-[2rem] bg-white")
        NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]" to="/home") Home
        span(class="mr-[10px]") /
        NuxtLink(class="mr-[10px] hover:cursor-pointer hover:font-[500]") Shop

    .shop-page-container(class="md:flex")
        .filter-bar(class="w-full md:w-[20%] min-w-[20rem] block sm:flex md:block")
            .filter-by-price(class="w-full mb-[1.5rem] sm:mr-[2rem] md:mr-[0rem]")
                .title(class="flex justify-between items-center w-full mb-[1.5rem]")
                    span(class="text-[1.25rem] font-[500] text-[#3D464D] mr-[1rem]") FILTER BY PRICE
                    span.title-line()
                .board-container(class="bg-white px-[20px] py-[1rem]")
                    .left(v-for="(price, index) in priceList" class="flex justify-between items-center py-[5px] font-[500]")
                        span(class="text-[1rem] hover:cursor-pointer hover:text-black active:translate-y-[1px]") {{ price.name }}
                        span(class="border-[#e5e7eb] border-[1px] px-[10px] rounded-[7px]") {{ price.value }}
                        
            .filter-by-size(class="w-full mb-[1.5rem]")
                .title(class="flex justify-between items-center w-full mb-[1.5rem]")
                    span(class="text-[1.25rem] font-[500] text-[#3D464D] mr-[1rem]") FILTER BY SIZE
                    span.title-line()
                .board-container(class="bg-white px-[20px] py-[1rem]")
                    .left(v-for="(price, index) in sizeList" class="flex justify-between items-center py-[5px] font-[500]")
                        span(class="text-[1rem] hover:cursor-pointer hover:text-black active:translate-y-[1px]") {{ price.name }}
                        span(class="border-[#e5e7eb] border-[1px] px-[10px] rounded-[7px]") {{ price.value }}
            

        .product-container(class="w-full md:w-[80%]")
            .show-option(class="flex justify-center md:justify-end items-center")
                .sorting()
                    .button-sorting(class="relative p-[10px] bg-white flex justify-center items-center mr-[20px] mb-[10px] rounded-[10px] border-[#e5e7eb] border-[1px]" @click="toggleShowSortingOptionDisplay")
                        span(class="mr-[10px]") {{ selected_sorting_type }}
                        img(src="@/assets/icons/caret-down.png" class="w-[10px] h-[10px] mt-[5px]")
                    .option(class="absolute p-[10px] bg-white flex justify-center items-start flex-col mr-[20px] z-[1] rounded-[10px] border-[#e5e7eb] border-[1px]" v-show="showSortingOptionDisplay")
                        span(v-for="(option, index) in sortingOptionList" class="w-full px-[5px] my-[5px] hover:cursor-pointer hover:font-[500] hover:bg-[#F5F5F5]" @click="selected_sorting_type = option") {{ option }}


                .amount()
                    .button-amount(class="relative p-[10px] bg-white flex justify-center items-center mr-[20px] mb-[10px] rounded-[10px] border-[#e5e7eb] border-[1px]" @click="toggleShowAmountOptionDisplay")
                        span(class="mr-[10px]") {{ selected_amount_type }}
                        img(src="@/assets/icons/caret-down.png" class="w-[10px] h-[10px] mt-[5px]")
                    .option(class="absolute py-[10px] bg-white flex justify-center items-start flex-col mr-[20px] z-[1] rounded-[10px] border-[#e5e7eb] border-[1px]" v-show="showAmountOptionDisplay")
                        span(v-for="(option, index) in amountOptionList" class="w-full px-[20px] my-[5px] hover:cursor-pointer hover:font-[500] hover:bg-[#F5F5F5]" @click="selected_amount_type = option") {{ option }}

            .product(class="p-[2rem] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
                div(v-for="item in 12") <productForm />
            
            .pagination(class="flex justify-center items-center")
                .previous(class="flex justify-center items-center border-[#e5e7eb] border-[1px] px-[15px] h-[2rem] mr-[10px] rounded-[10px]"  @click="previous_page")
                    img(src="@/assets/icons/arrow-down-sign-to-navigate.png" class="w-[20px] h-[20px] rotate-[90deg]")
                .page-number(v-for="(page, index) in page_amount" class="flex justify-center items-center border-[#e5e7eb] border-[1px] px-[15px] h-[2rem] mr-[10px] rounded-[10px]" :class="{'selected-pagination': current_pagination == index}" @click="current_pagination = index") {{ index + 1 }}
                .next(class="flex justify-center items-center border-[#e5e7eb] border-[1px] px-[15px] h-[2rem] rounded-[10px]" @click="next_page")
                    img(src="@/assets/icons/arrow-down-sign-to-navigate.png" class="w-[20px] h-[20px] rotate-[-90deg]")
</template>


<script setup lang="ts">

// >>>>>>>>>>>>>>>>>>>> Show Option Zone START <<<<<<<<<<<<<<<<<<<<
const selected_sorting_type = ref('Latest');
const selected_amount_type = ref(10);

const sortingOptionList = ['Latest', 'Popularity', 'Best Rating'];
const amountOptionList = [10, 20, 30];

// const sorting_type = computed(() => { return selected_sorting_type.value || 'Sorting' })
// const amount_type = computed(() => { return selected_amount_type.value || 'Showing' })

const showSortingOptionDisplay = ref(false)
const showAmountOptionDisplay = ref(false)

const toggleShowSortingOptionDisplay = () => { showSortingOptionDisplay.value = !showSortingOptionDisplay.value }
const toggleShowAmountOptionDisplay = () => { showAmountOptionDisplay.value = !showAmountOptionDisplay.value }

const disableShowSortingOptionDisplay = (event: MouseEvent) => {
    if(!(event.target as HTMLElement).closest('.button-sorting')) {
        showSortingOptionDisplay.value = false;
    }
}

const disableShowAmountOptionDisplay = (event: MouseEvent) => {
    if(!(event.target as HTMLElement).closest('.button-amount')) {
        showAmountOptionDisplay.value = false;
    }
}

onMounted(() => {
    window.addEventListener('click', disableShowSortingOptionDisplay);
    console.log('onMounted: On')
});

onBeforeUnmount(()=>{
    window.removeEventListener('click', disableShowSortingOptionDisplay)
    console.log('onMounted: Off')
})

onMounted(() => {
    window.addEventListener('click', disableShowAmountOptionDisplay);
    console.log('onMounted: On')
});

onBeforeUnmount(()=>{
    window.removeEventListener('click', disableShowAmountOptionDisplay)
    console.log('onMounted: Off')
})
// >>>>>>>>>>>>>>>>>>>> Show Option Zone END <<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>> Filter Zone START <<<<<<<<<<<<<<<<<<<<
const priceList = [
    {
        'name' : 'All Price',
        'value' : '1000',
    },
    {
        'name' : '$0 - $100',
        'value' : '150',
    },
    {
        'name' : '$100 - $200',
        'value' : '295',
    },
    {
        'name' : '$200 - $300',
        'value' : '246',
    },
    {
        'name' : '$300 - $400',
        'value' : '145',
    },
    {
        'name' : '$400 - $500',
        'value' : '168',
    },
]

const sizeList = [
    {
        'name' : 'All Size',
        'value' : '1000',
    },
    {
        'name' : 'XS',
        'value' : '150',
    },
    {
        'name' : 'S',
        'value' : '295',
    },
    {
        'name' : 'M',
        'value' : '246',
    },
    {
        'name' : 'L',
        'value' : '145',
    },
    {
        'name' : 'XL',
        'value' : '168',
    },
]
// >>>>>>>>>>>>>>>>>>>> Pagination Zone END <<<<<<<<<<<<<<<<<<<<
const current_pagination = ref(0)
const page_amount = 5
const previous_page = () => {current_pagination.value > 0 ? current_pagination.value = current_pagination.value - 1 : current_pagination.value = current_pagination.value}
const next_page = () => {current_pagination.value < page_amount-1 ? current_pagination.value = current_pagination.value + 1 : current_pagination.value = current_pagination.value}
// >>>>>>>>>>>>>>>>>>>> Pagination Zone START <<<<<<<<<<<<<<<<<<<<


</script>


<style lang="scss">
#shop-page{
    .title-line{
        width: calc(100% - 11rem);
        --tw-border-opacity: 0.5;
        border-color: rgb(61 70 77 / var(--tw-border-opacity));
        border-top-width: 1px;
        border-style: dashed;
        margin-top: 3px;
    }

    .shop-page-container{
        .filter-bar{
            .selected-filter{
                font-weight: 500;
                color: #FFD333;
            }
        }
    }

    .product-container{
        .pagination{
            .selected-pagination{
                background-color: #FFD333;
                font-weight: 500;
                color: black;
            }
        }
    }
}
</style>