import { Color } from 'constants/color';

export function getBtnHoverColor(color: Color) {
    switch (color) {
        case Color.Black:
            return 'hover:bg-black-b';
        case Color.Dark:
            return 'hover:bg-dark-b';
        case Color.Brown:
            return 'hover:bg-brown-b';
        case Color.LightBrown:
            return 'hover:bg-light-brown-b';
        case Color.Gray:
            return 'hover:bg-gray-b';
        default:
            return '';
    }
}
