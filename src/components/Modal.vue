<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    mounted () {
        console.log('Modal');
        document.body.style.overflow = 'hidden';
    },
    destroyed () {
        document.body.style.overflow = 'auto';
    }
})
export default class Modal extends Vue {

}
</script>

<template>
    <div class="z-10 w-full h-full fixed left-0 top-0" >
        <div class="w-full h-full absolute left-0 top-0 backdrop-blur-sm bg-grey/[.4] "></div>
        <slot name="modal-body" :classes="['absolute left-[50%]', 'top-[50%]', 'translate-x-[-50%]', 'translate-y-[-50%]']"></slot>
    </div>
</template>

<style scoped lang="scss">
</style>
