import { Title } from 'constants/title';

type GetTitle = {
    tag: string;
    classes: string[];
};

export function getTitle(title: Title): GetTitle {
    switch (title) {
        case Title.H1:
            return {
                tag: 'h1',
                classes: ['text-2xl', 'font-bold', 'mt-[4.5rem]', 'mb-[3.9rem]'],
            };
        case Title.H2:
            return {
                tag: 'h2',
                classes: ['text-xl', 'font-normal'],
            };
        case Title.H3:
            return {
                tag: 'h3',
                classes: ['text-lg', 'font-bold'],
            };
        case Title.H4:
            return {
                tag: 'h4',
                classes: ['text-sm', 'font-bold'],
            };
        case Title.H5:
            return {
                tag: 'h5',
                classes: ['text-sm', 'font-normal'],
            };
        case Title.H6:
            return {
                tag: 'h6',
                classes: ['text-sm', 'font-light'],
            };
        default:
            return {
                tag: '',
                classes: [''],
            };
    }
}
