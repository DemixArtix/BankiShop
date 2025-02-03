import { TextPosition } from 'constants/textPosition';

export function getTextPosition(position: TextPosition) {
    switch (position) {
        case TextPosition.Left:
            return 'text-left';
        case TextPosition.Right:
            return 'text-right';
        case TextPosition.Center:
            return 'text-center';
        default:
            return '';
    }
}
