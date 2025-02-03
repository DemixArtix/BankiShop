<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    watch: {},
})
export default class TextInput extends Vue {
    @Prop({ default: '' }) value!: string;
    @Prop({ default: '' }) name!: string;
    @Prop({ default: '' }) placeholder!: string;

    get model() {
        return this.value;
    }

    set model(value) {
        this.$emit('input', value);
    }

    handleReset() {
        this.$emit('handleReset')
    }
}
</script>

<template>
    <div class="relative">
        <input
            class="pl-[1.4rem] pr-[6rem] pt-[1.4rem] pb-[1.3rem] text-sm border border-border-gray outline-none focus:border-border-gray-focus transition duration-300"
            type="text"
            :name="name"
            v-model="model"
            :placeholder="placeholder"
        />
        <div v-if="value" class="input__close absolute" @click="handleReset"></div>
    </div>
</template>

<style scoped lang="scss">

.input__close {
    height: 1.6rem;
    width: 1.6rem;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: 0.4s;
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
    &:after, &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        height: 1px;
        width: 100%;
        @apply bg-grey;
    }
    &:after {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:before {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
}
</style>
