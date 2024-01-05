<template>
    <div class="header-layout">
        <header_navbar />
    </div>
    <div class="body-layout px-[1rem] md:px-[3rem]">
        <slot />
    </div>
</template>


<style lang="scss">
.header-layout{
    width: 100%;
}

.body-layout{
    width: 100%;
    height: fit-content;
    // padding: 0px 3rem;
    background-color: #F5F5F5;
}
</style>
