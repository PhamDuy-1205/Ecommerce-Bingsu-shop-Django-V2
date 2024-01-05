<template>
    <div class="header-layout">
        <header_navbar />
    </div>
    <div class="body-layout">
        <slot />
    </div>
</template>


<style lang="scss">
.header-layout{
    width: 100%;
}

.body-layout{
    width: 100%;
    padding: 0px 3rem;
}
</style>
