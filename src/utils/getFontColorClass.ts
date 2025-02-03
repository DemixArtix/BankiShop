import { FontColor } from 'constants/fontColor';

export function getFontColorClass(color: FontColor) {
    switch (color) {
        case FontColor.Black:
            return 'text-black';
        case FontColor.White:
            return 'text-white';
        case FontColor.Grey:
            return 'text-grey';
        case FontColor.LightGrey:
            return 'text-light-grey';
        default:
            return '';
    }
}
