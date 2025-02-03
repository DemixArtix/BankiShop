import { Prop, Vue } from 'vue-property-decorator';
import { FontSize } from 'constants/fontSize';
import { FontWeight } from 'constants/fontWeight';
import { FontColor } from 'constants/fontColor';

export class LabelProps extends Vue {
    @Prop({ default: '' }) text!: string;
    @Prop({ default: FontSize.SM }) fontSize!: FontSize;
    @Prop({ default: FontWeight.Regular }) fontWeight!: FontWeight;
    @Prop({ default: FontColor.Black }) fontColor!: FontColor;
    @Prop({ default: false }) uppercase!: boolean;
    @Prop({ default: false }) capitalize!: boolean;
    @Prop({ default: false }) lineThrough!: boolean;
}
