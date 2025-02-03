<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Container extends Vue {}
</script>

<template>
    <div class="lg:w-[121.6rem] max-w-[calc(100vw-5rem)] mx-auto">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss"></style>
