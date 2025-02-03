import { FontWeight } from 'constants/fontWeight';

export function getFontWeightClass(size: FontWeight) {
    switch (size) {
        case FontWeight.Light:
            return 'font-light';
        case FontWeight.Regular:
            return 'font-normal';
        case FontWeight.Medium:
            return 'font-medium';
        case FontWeight.Bold:
            return 'font-bold';
        case FontWeight.Black:
            return 'font-black';
        default:
            return '';
    }
}
