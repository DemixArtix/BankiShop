<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Label from 'components/Label/Label.vue';
import { LabelProps } from 'components/Label/logic/labelProps';
import { getBtnColor } from 'components/Btn/logic/utils/getBtnColor';
import { Color } from 'constants/color';
import { getBtnHoverColor } from 'components/Btn/logic/utils/getBtnHoverColor';

@Component({
    components: { Label },
})
export default class Btn extends LabelProps {
    @Prop({ default: Color.Black }) color!: Color;
    @Prop({ default: Color.LightBrown }) hoverColor!: Color;

    get btnClasses() {
        return [getBtnColor(this.color), getBtnHoverColor(this.hoverColor)];
    }
}
</script>

<template>
    <button
        @click="$emit('click')"
        :class="btnClasses"
        class="py-[1.4rem] min-w-[12rem] transition"
    >
        <slot v-if="$slots.default"></slot>
        <Label
            v-else
            :text="text"
            :fontSize="fontSize"
            :fontWeight="fontWeight"
            :fontColor="fontColor"
            :uppercase="uppercase"
            :capitalize="capitalize"
        />
    </button>
</template>

<style scoped lang="scss"></style>
