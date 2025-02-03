<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { getTitle as getTitleExternal } from 'components/TitleLabel/logic/utils/getTitle';
import { Title } from 'constants/title';
import { TextPosition } from 'constants/textPosition';
import { getTextPosition } from 'utils/getTextPosition';
import { FontColor } from 'constants/fontColor';
import { getFontColorClass } from 'utils/getFontColorClass';

@Component({})
export default class TitleLabel extends Vue {
    @Prop({ default: Title.H1 }) titleType!: Title;
    @Prop({ default: TextPosition.Center }) textPosition!: TextPosition;
    @Prop({ default: '' }) text!: string;
    @Prop({ default: FontColor.Black }) fontColor!: FontColor;
    get titleLabel() {
        return getTitleExternal(this.titleType);
    }
    get titleLabelClasses() {
        return [
            ...this.titleLabel.classes,
            getTextPosition(this.textPosition),
            getFontColorClass(this.fontColor),
        ];
    }
}
</script>

<template>
    <component :is="titleLabel.tag" :class="titleLabelClasses">{{ text }}</component>
</template>

<style scoped lang="scss"></style>
