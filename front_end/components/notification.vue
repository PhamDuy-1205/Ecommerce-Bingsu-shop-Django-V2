<template lang="pug">
#notify-board
    .container(class="w-[50rem] p-[30px] rounded-[30px] flex justify-center items-center flex-col bg-white")
        .title(class="w-full flex justify-center items-center")
            span(class="text-[30px] font-[600]") Notification
        .content(class="w-full flex justify-start items-start")
            span(class="text-[1.25rem]") {{ content }}
        .confirm-btn(class="flex justify-center items-center")
            

</template>


<script setup>
const { content } = defineProps(['content']);
</script>


<style lang="scss">
#notify-board{
    z-index: 999999;  height: 100% !important;
  width: 100vw;
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: unset;
  display: flex;
  align-items: center;
  justify-content: center;}
</style>