import { FontSize } from 'constants/fontSize';

export function getFontSizeClass(size: FontSize) {
    switch (size) {
        case FontSize.SM:
            return 'text-sm';
        case FontSize.LG:
            return 'text-lg';
        case FontSize.XL:
            return 'text-xl';
        default:
            return '';
    }
}
