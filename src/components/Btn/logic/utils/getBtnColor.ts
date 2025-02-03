import { Color } from 'constants/color';

export function getBtnColor(color: Color) {
    switch (color) {
        case Color.Black:
            return 'bg-black-b';
        case Color.Dark:
            return 'bg-dark-b';
        case Color.Brown:
            return 'bg-brown-b';
        case Color.LightBrown:
            return 'bg-light-brown-b';
        case Color.Gray:
            return 'bg-gray-b';
        default:
            return '';
    }
}
