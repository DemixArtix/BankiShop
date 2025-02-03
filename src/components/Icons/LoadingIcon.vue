<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class LoadingIcon extends Vue {}
</script>

<template>
    <svg class="w-[5rem] m-[-1.5rem]" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <circle
            class="spin"
            cx="400"
            cy="400"
            fill="none"
            r="157"
            stroke-width="7"
            stroke="#fff"
            stroke-dasharray="307 1400"
            stroke-linecap="round"
        />
        <circle
            cx="400"
            cy="400"
            fill="none"
            r="157"
            stroke-width="4"
            stroke="#fff"
            opacity="0.4"
            stroke-linecap="round"
        />
    </svg>
</template>

<style scoped lang="scss">
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.spin {
    transform-origin: center;
    animation: spin 1s linear infinite;
}
</style>
