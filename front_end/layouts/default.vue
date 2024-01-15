<template>
    <div class="header-layout min-w-[500px]">
        <headerForm />
    </div>
    <div class="body-layout px-[1rem] py-[1.8rem] md:px-[3rem] min-w-[500px]">
        <slot />
    </div>
    <div class="footer-layout min-w-[500px]">
        <footerForm />
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
