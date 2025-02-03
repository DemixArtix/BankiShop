<script lang="ts">
import { Component } from 'vue-property-decorator';
import { getFontSizeClass } from 'components/Label/logic/utils/getFontSizeClass';
import { getFontWeightClass } from 'components/Label/logic/utils/getFontWeightClass';
import { LabelProps } from 'components/Label/logic/labelProps';
import { getFontColorClass } from 'utils/getFontColorClass';

@Component({})
export default class Label extends LabelProps {
    get textClasses(): string[] {
        return [
            getFontSizeClass(this.fontSize),
            getFontWeightClass(this.fontWeight),
            getFontColorClass(this.fontColor),
            ...(this.uppercase ? ['uppercase'] : []),
            ...(this.capitalize ? ['capitalize'] : []),
            ...(this.lineThrough ? ['line-through'] : []),
        ];
    }
}
</script>

<template>
    <span :class="textClasses">{{ text }}</span>
</template>

<style scoped lang="scss"></style>
